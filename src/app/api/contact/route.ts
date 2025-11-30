import { NextRequest, NextResponse } from 'next/server';
import { LRUCache } from 'lru-cache';

// Rate limiting configuration
const rateLimit = new LRUCache<string, number>({
    max: 500, // Maximum number of entries
    ttl: 60 * 1000, // 1 minute TTL
});

// Rate limit: 3 requests per minute per IP
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function getRateLimitKey(request: NextRequest): string {
    // Get IP address from headers (works with Vercel, Cloudflare, etc.)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 
               request.headers.get('x-real-ip') || 
               'unknown';
    return `rate_limit_${ip}`;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
    const count = rateLimit.get(key) || 0;
    
    if (count >= RATE_LIMIT_MAX) {
        return { allowed: false, remaining: 0 };
    }
    
    rateLimit.set(key, count + 1);
    return { allowed: true, remaining: RATE_LIMIT_MAX - count - 1 };
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting check
        const rateLimitKey = getRateLimitKey(request);
        const rateLimitResult = checkRateLimit(rateLimitKey);
        
        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                { 
                    error: 'Rate limit exceeded',
                    message: 'Too many requests. Please try again in a minute.',
                    retryAfter: 60
                },
                { 
                    status: 429,
                    headers: {
                        'Retry-After': '60',
                        'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
                        'X-RateLimit-Remaining': '0',
                    }
                }
            );
        }

        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Additional validation: prevent spam
        const trimmedMessage = message.trim();
        if (trimmedMessage.length < 10) {
            return NextResponse.json(
                { error: 'Message is too short' },
                { status: 400 }
            );
        }

        if (trimmedMessage.length > 5000) {
            return NextResponse.json(
                { error: 'Message is too long' },
                { status: 400 }
            );
        }

        // Check for common spam patterns
        const spamPatterns = [
            /http[s]?:\/\//gi,
            /www\./gi,
            /bit\.ly|tinyurl|short\.link/gi,
        ];
        
        const linkCount = spamPatterns.reduce((count, pattern) => {
            return count + (trimmedMessage.match(pattern) || []).length;
        }, 0);

        if (linkCount > 3) {
            return NextResponse.json(
                { error: 'Message contains too many links' },
                { status: 400 }
            );
        }

        // Return success - client will handle EmailJS sending
        // This API route validates and rate limits, but EmailJS sends from client
        return NextResponse.json(
            { 
                success: true, 
                message: 'Request validated',
                rateLimitRemaining: rateLimitResult.remaining
            },
            { 
                status: 200,
                headers: {
                    'X-RateLimit-Limit': RATE_LIMIT_MAX.toString(),
                    'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
                }
            }
        );
    } catch (error: any) {
        console.error('API route error:', error);
        return NextResponse.json(
            { 
                error: 'Internal server error',
                details: error?.message || 'Unknown error'
            },
            { status: 500 }
        );
    }
}
