"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { profile } from "@/data/portfolioData";
import SectionHeader from "./SectionHeader";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isEncrypting, setIsEncrypting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [sendFailed, setSendFailed] = useState(false);
    const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

    // EmailJS configuration
    const EMAILJS_PUBLIC_KEY = 'ld0CAmwro6sCwq3j8';
    const EMAILJS_SERVICE_ID = 'service_jxu8lkp';
    const CONTACT_TEMPLATE_ID = 'template_apmxbij';
    const AUTO_REPLY_TEMPLATE_ID = 'template_3szhmze';

    // Client-side rate limiting: minimum 10 seconds between submissions
    const MIN_SUBMIT_INTERVAL = 10000; // 10 seconds

    // Initialize EmailJS on component mount
    useEffect(() => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Client-side rate limiting check
        const now = Date.now();
        const timeSinceLastSubmit = now - lastSubmitTime;
        if (timeSinceLastSubmit < MIN_SUBMIT_INTERVAL) {
            const remainingSeconds = Math.ceil((MIN_SUBMIT_INTERVAL - timeSinceLastSubmit) / 1000);
            setError(`Please wait ${remainingSeconds} second${remainingSeconds > 1 ? 's' : ''} before submitting again.`);
            return;
        }

        // Validate form data
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setError("All fields are required. Please fill in all fields.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsEncrypting(true);
        setError(null);
        setLastSubmitTime(now);

        const trimmedName = formData.name.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedMessage = formData.message.trim();

        try {
            // First, validate and check rate limit via API route
            const validationResponse = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: trimmedName,
                    email: trimmedEmail,
                    message: trimmedMessage,
                }),
            });

            const validationData = await validationResponse.json();

            if (!validationResponse.ok) {
                if (validationResponse.status === 429) {
                    throw new Error('Rate limit exceeded. Please wait a minute before trying again.');
                }
                throw new Error(validationData.error || validationData.message || 'Validation failed');
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

            // Send form submission to your email (Contact Us template) - client-side
            let contactResult;
            try {
                contactResult = await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    CONTACT_TEMPLATE_ID,
                    {
                        name: trimmedName,
                        email: trimmedEmail,
                        message: trimmedMessage,
                        title: `Message from ${trimmedName}`,
                        time: currentTime,
                    }
                );
            } catch (contactErr: any) {
                console.error("Contact form email failed:", contactErr);
                throw new Error(contactErr?.text || contactErr?.message || 'Failed to send form submission');
            }

            // Try to send auto-reply (don't fail if this fails, main email is more important)
            try {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    AUTO_REPLY_TEMPLATE_ID,
                    {
                        from_name: trimmedName,
                        from_email: trimmedEmail,
                    }
                );
            } catch (autoReplyErr: any) {
                console.error("Auto-reply email failed:", autoReplyErr);
                // Continue even if auto-reply fails - main email was sent
            }

            // Check if main email was sent successfully
            if (contactResult && contactResult.text === 'OK') {
                setIsEncrypting(false);
                setIsSent(true);

                // Reset after 3 seconds
                setTimeout(() => {
                    setIsSent(false);
                    setFormData({ name: "", email: "", message: "" });
                }, 3000);
            } else {
                throw new Error('Failed to send form submission');
            }
        } catch (err: any) {
            // Keep provider details in the console; visitors get a friendly fallback.
            console.error("Failed to send email:", err);

            const isRateLimited = typeof err?.message === 'string' && err.message.startsWith('Rate limit');
            const errorMessage = isRateLimited
                ? err.message
                : "Something went wrong sending your message. You can email me directly instead.";

            setIsEncrypting(false);
            setSendFailed(!isRateLimited);
            setError(errorMessage);

            // Clear error after 15 seconds
            setTimeout(() => {
                setError(null);
                setSendFailed(false);
            }, 15000);
        }
    };

    const field = "w-full rounded-xl bg-surface border border-transparent px-4 py-3 outline-none focus:border-ink transition";

    return (
        <section id="contact" className="px-4 sm:px-6 py-16 md:py-24 border-t border-line">
            <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)]">
                <div>
                    <SectionHeader tag="Contact" title="Let's talk security" />
                    <p className="font-display text-xl font-medium tracking-tight max-w-md">
                        The best conversations don&apos;t start with a checklist.
                    </p>
                    <p className="mt-3 text-muted text-lg max-w-md">
                        You don&apos;t need a perfect match to reach out, whether it&apos;s a role, a project, research, or just a conversation. If you&apos;re working on risk, compliance or AI security, I&apos;d like to hear about it.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 items-start">
                        <a href={profile.links.email} className="link-underline font-medium">Email me directly</a>
                        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline font-medium">LinkedIn</a>
                        <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link-underline font-medium">GitHub</a>
                    </div>
                </div>

                <div className="max-w-2xl w-full">
                    {isSent ? (
                        <div className="rounded-3xl bg-surface p-8 flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                            <div>
                                <p className="font-medium text-lg">Message sent</p>
                                <p className="text-muted">Thanks for reaching out. You&apos;ll get a confirmation email shortly.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="block">
                                    <span className="block text-sm font-medium mb-1.5">Name</span>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={field}
                                        autoComplete="name"
                                    />
                                </label>
                                <label className="block">
                                    <span className="block text-sm font-medium mb-1.5">Email</span>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={field}
                                        autoComplete="email"
                                    />
                                </label>
                            </div>
                            <label className="block">
                                <span className="block text-sm font-medium mb-1.5">Message</span>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className={`${field} resize-none`}
                                />
                            </label>

                            {error && (
                                <p className="flex items-start gap-2 text-sm text-red-600" role="alert">
                                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                    <span>
                                        {error}
                                        {sendFailed && (
                                            <>
                                                {" "}
                                                <a href={profile.links.email} className="link-underline font-medium">
                                                    {profile.links.email.replace("mailto:", "")}
                                                </a>
                                            </>
                                        )}
                                    </span>
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isEncrypting}
                                className="inline-flex items-center gap-6 pl-6 pr-2 py-2 rounded-2xl bg-ink text-bg font-medium disabled:opacity-60 hover:opacity-90 transition"
                            >
                                {isEncrypting ? "Sending…" : "Send message"}
                                <span className="w-8 h-8 rounded-full bg-accent text-accent-ink flex items-center justify-center">
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
