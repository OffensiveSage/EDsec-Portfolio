import { NextRequest, NextResponse } from 'next/server';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'ld0CAmwro6sCwq3j8';
const EMAILJS_SERVICE_ID = 'service_jxu8lkp';
const CONTACT_TEMPLATE_ID = 'template_apmxbij';
const AUTO_REPLY_TEMPLATE_ID = 'template_3szhmze';
const EMAILJS_API_URL = 'https://api.emailjs.com/api/v1.0/email/send';

export async function POST(request: NextRequest) {
    try {
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

        // Get current time for the template
        const currentTime = new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();

        // Send form submission to your email (Contact Us template) using REST API
        let contactResponse;
        try {
            contactResponse = await fetch(EMAILJS_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: EMAILJS_SERVICE_ID,
                    template_id: CONTACT_TEMPLATE_ID,
                    user_id: EMAILJS_PUBLIC_KEY,
                    template_params: {
                        name: trimmedName,
                        email: trimmedEmail,
                        message: trimmedMessage,
                        title: `Message from ${trimmedName}`,
                        time: currentTime,
                    },
                }),
            });

            if (!contactResponse.ok) {
                const errorText = await contactResponse.text();
                throw new Error(`EmailJS API error: ${contactResponse.status} - ${errorText}`);
            }
        } catch (contactErr: any) {
            console.error('Contact form email failed:', contactErr);
            return NextResponse.json(
                { 
                    error: 'Failed to send form submission',
                    details: contactErr?.message || 'Unknown error'
                },
                { status: 500 }
            );
        }

        // Try to send auto-reply (don't fail if this fails, main email is more important)
        try {
            await fetch(EMAILJS_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: EMAILJS_SERVICE_ID,
                    template_id: AUTO_REPLY_TEMPLATE_ID,
                    user_id: EMAILJS_PUBLIC_KEY,
                    template_params: {
                        from_name: trimmedName,
                        from_email: trimmedEmail,
                    },
                }),
            });
        } catch (autoReplyErr: any) {
            console.error('Auto-reply email failed:', autoReplyErr);
            // Continue even if auto-reply fails - main email was sent
        }

        // Check if main email was sent successfully
        if (contactResponse && contactResponse.ok) {
            return NextResponse.json(
                { success: true, message: 'Email sent successfully' },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }
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

