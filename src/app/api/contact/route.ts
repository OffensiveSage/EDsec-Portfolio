import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

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

        // Initialize EmailJS
        emailjs.init(PUBLIC_KEY);

        // Send notification to you
        await emailjs.send(
            SERVICE_ID,
            NOTIFICATION_TEMPLATE_ID,
            {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'eshwar.desetty@gmail.com',
            },
            PUBLIC_KEY
        );

        // Send auto-reply to user
        await emailjs.send(
            SERVICE_ID,
            AUTO_REPLY_TEMPLATE_ID,
            {
                to_name: name,
                to_email: email,
                from_name: 'Eshwar Desetty',
            },
            PUBLIC_KEY
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
