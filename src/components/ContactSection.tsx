"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Send, CheckCircle, AlertCircle, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isEncrypting, setIsEncrypting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Initialize EmailJS with hardcoded public key
        try {
            emailjs.init('ld0CAmwro6sCwq3j8');
            setIsInitialized(true);
        } catch (err) {
            console.error("Failed to initialize EmailJS:", err);
            setError("Failed to initialize email service. Please refresh the page.");
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
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

        if (!isInitialized) {
            setError("Email service not initialized. Please refresh the page.");
            return;
        }

        setIsEncrypting(true);
        setError(null);

        // Simulate encryption delay for effect
        await new Promise((resolve) => setTimeout(resolve, 1500));

        try {
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

            const trimmedName = formData.name.trim();
            const trimmedEmail = formData.email.trim();
            const trimmedMessage = formData.message.trim();

            // Send form submission to your email (Contact Us template)
            const contactResult = await emailjs.send(
                'service_jxu8lkp',
                'template_apmxbij',
                {
                    name: trimmedName,
                    email: trimmedEmail,
                    message: trimmedMessage,
                    title: `Message from ${trimmedName}`,
                    time: currentTime,
                }
            );

            // Send auto-reply to the sender (Auto-Reply template)
            const autoReplyResult = await emailjs.send(
                'service_jxu8lkp',
                'template_3szhmze',
                {
                    from_name: trimmedName,
                    from_email: trimmedEmail,
                }
            );

            // Check if both emails were sent successfully
            if (contactResult && contactResult.text === 'OK' && autoReplyResult && autoReplyResult.text === 'OK') {
                setIsEncrypting(false);
                setIsSent(true);

                // Reset after 3 seconds
                setTimeout(() => {
                    setIsSent(false);
                    setFormData({ name: "", email: "", message: "" });
                }, 3000);
            } else {
                throw new Error('One or both emails failed to send');
            }
        } catch (err: any) {
            console.error("Failed to send email:", err);
            
            let errorMessage = "TRANSMISSION_FAILED: ";
            
            if (err?.text) {
                errorMessage += err.text;
            } else if (err?.message) {
                errorMessage += err.message;
            } else if (typeof err === 'string') {
                errorMessage += err;
            } else if (err?.status) {
                errorMessage += `HTTP ${err.status}: ${err.text || 'Request failed'}`;
            } else {
                errorMessage += "Unable to send message. Please try again later or contact directly via email.";
            }
            
            setIsEncrypting(false);
            setError(errorMessage);
            
            // Clear error after 5 seconds
            setTimeout(() => {
                setError(null);
            }, 5000);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center snap-start relative z-10 bg-cyber-black">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-12 flex items-center gap-3">
                        <Lock className="w-8 h-8 text-cyber-green" />
                        <span className="text-cyber-green">{">"}</span> SECURE_TRANSMISSION
                    </h2>

                    <div className="border-2 border-cyber-green/30 rounded-lg p-8 bg-cyber-gray/5 backdrop-blur-sm">
                        {/* PGP Key Visual */}
                        <div className="mb-6 p-4 bg-cyber-black/50 border border-cyber-green/20 rounded font-mono text-xs text-cyber-green/50 overflow-hidden">
                            <div className="flex items-center gap-2 mb-2">
                                <Lock className="w-3 h-3" />
                                <span>PGP PUBLIC KEY BLOCK</span>
                            </div>
                            <div className="opacity-50">
                                -----BEGIN PGP PUBLIC KEY BLOCK-----<br />
                                mQENBGF2xK0BCADMz8... [TRUNCATED]<br />
                                -----END PGP PUBLIC KEY BLOCK-----
                            </div>
                        </div>

                        {isSent ? (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-center py-12"
                            >
                                <CheckCircle className="w-16 h-16 text-cyber-green mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-cyber-green mb-2">MESSAGE_TRANSMITTED</h3>
                                <p className="text-gray-400">Your encrypted message has been sent successfully.</p>
                            </motion.div>
                        ) : isEncrypting ? (
                            <div className="text-center py-12">
                                <div className="mb-4">
                                    <Lock className="w-16 h-16 text-cyber-green mx-auto animate-pulse" />
                                </div>
                                <h3 className="text-xl font-bold text-cyber-neon mb-4">ENCRYPTING_MESSAGE...</h3>
                                <div className="max-w-md mx-auto">
                                    <div className="h-2 bg-cyber-gray/30 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-cyber-green"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 2 }}
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 font-mono">
                                    Applying AES-256 encryption...
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 border border-red-500/50 bg-red-500/10 rounded flex items-start gap-2 text-red-500 text-sm font-mono"
                                    >
                                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <div className="flex-1">{error}</div>
                                        <button
                                            onClick={() => setError(null)}
                                            className="text-red-500 hover:text-red-400 transition-colors ml-2"
                                            aria-label="Dismiss error"
                                        >
                                            ×
                                        </button>
                                    </motion.div>
                                )}
                                <div>
                                    <label className="block text-sm font-mono text-cyber-green mb-2">
                                        SENDER_ID
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-cyber-black border border-cyber-green/30 rounded text-white font-mono focus:border-cyber-green focus:outline-none transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-mono text-cyber-green mb-2">
                                        EMAIL_ADDRESS
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-cyber-black border border-cyber-green/30 rounded text-white font-mono focus:border-cyber-green focus:outline-none transition-colors"
                                        placeholder="your.email@domain.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-mono text-cyber-green mb-2">
                                        ENCRYPTED_PAYLOAD
                                    </label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-cyber-black border border-cyber-green/30 rounded text-white font-mono focus:border-cyber-green focus:outline-none transition-colors resize-none"
                                        placeholder="Type your message here..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isEncrypting}
                                    whileHover={!isEncrypting ? { scale: 1.02 } : {}}
                                    whileTap={!isEncrypting ? { scale: 0.98 } : {}}
                                    className={`w-full py-4 bg-cyber-green text-black font-mono font-bold rounded flex items-center justify-center gap-2 transition-colors ${
                                        isEncrypting 
                                            ? 'opacity-50 cursor-not-allowed' 
                                            : 'hover:bg-cyber-neon'
                                    }`}
                                >
                                    <Send className="w-5 h-5" />
                                    {isEncrypting ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE'}
                                </motion.button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                        <a href="mailto:eshwar.desetty03@gmail.com" className="p-4 border border-red-500/20 rounded hover:bg-red-500/10 transition-colors group flex flex-col items-center justify-center">
                            <Mail className="w-8 h-8 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
                            <p className="text-xs font-mono text-gray-400 group-hover:text-red-400 transition-colors">EMAIL</p>
                        </a>
                        <a href="https://linkedin.com/in/eshwar-desetty" target="_blank" rel="noopener noreferrer" className="p-4 border border-blue-500/20 rounded hover:bg-blue-500/10 transition-colors group flex flex-col items-center justify-center">
                            <Linkedin className="w-8 h-8 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                            <p className="text-xs font-mono text-gray-400 group-hover:text-blue-400 transition-colors">LINKEDIN</p>
                        </a>
                        <a href="https://github.com/OffensiveSage" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/20 rounded hover:bg-white/10 transition-colors group flex flex-col items-center justify-center">
                            <Github className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform" />
                            <p className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">GITHUB</p>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
