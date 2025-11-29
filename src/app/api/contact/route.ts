import { NextResponse } from 'next/server';

// Hardcoded EmailJS credentials
const SERVICE_ID = 'service_jxu8lkp';
const AUTO_REPLY_TEMPLATE_ID = 'template_3szhmze';
const NOTIFICATION_TEMPLATE_ID = 'template_apmxbij';
const PUBLIC_KEY = 'ld0CAmwro6sCwq3j8';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send notification to you using EmailJS REST API
        const notificationResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: SERVICE_ID,
                template_id: NOTIFICATION_TEMPLATE_ID,
                user_id: PUBLIC_KEY,
                template_params: {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: 'eshwar.desetty@gmail.com',
                },
            }),
        });

        if (!notificationResponse.ok) {
            throw new Error('Failed to send notification email');
        }

        // Send auto-reply to user
        const autoReplyResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: SERVICE_ID,
                template_id: AUTO_REPLY_TEMPLATE_ID,
                user_id: PUBLIC_KEY,
                template_params: {
                    to_name: name,
                    to_email: email,
                    from_name: 'Eshwar Desetty',
                },
            }),
        });

        if (!autoReplyResponse.ok) {
            throw new Error('Failed to send auto-reply email');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
