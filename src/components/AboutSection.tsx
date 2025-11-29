"use client";

import { motion } from "framer-motion";
import { User, Fingerprint } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center snap-start relative z-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Profile Image / Avatar Placeholder */}
                    <div className="w-64 h-64 relative flex-shrink-0">
                        <div className="absolute inset-0 border-2 border-cyber-green rounded-full animate-pulse box-glow" />
                        <div className="absolute inset-2 border border-cyber-neon rounded-full opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center bg-cyber-gray/50 rounded-full overflow-hidden backdrop-blur-sm">
                            <User className="w-32 h-32 text-cyber-green" />
                        </div>
                        {/* Decorators */}
                        <div className="absolute -top-4 -right-4 bg-cyber-black border border-cyber-green p-2 rounded text-xs text-cyber-green font-mono">
                            <Fingerprint className="w-4 h-4 inline mr-1" />
                            VERIFIED
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold font-mono text-cyber-neon mb-6 flex items-center gap-3">
                            <span className="text-cyber-green">{">"}</span> IDENTITY_VERIFICATION
                        </h2>
                        <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                            <p>
                                <span className="text-cyber-green">Name:</span> Eshwar Desetty
                            </p>
                            <p>
                                <span className="text-cyber-green">Mission:</span> To simplify security and make it accessible to everyone.
                            </p>
                            <div className="border-l-2 border-cyber-green pl-4 py-2 bg-cyber-gray/20 text-sm md:text-base">
                                <p>
                                    Ever felt like cybersecurity is written in a completely different language? That&apos;s exactly why I am passionate about making security actually make sense for everyone. What excites me most is finding ways to simplify the complex without dumbing it down. Through my experience, I have discovered that security issues are not always just technical problems; sometimes they are communication challenges. The best fix is not always the most sophisticated one, rather it&apos;s the one people will actually use. Currently deep in cyber anomaly detection and threat intelligence, learning to spot patterns that others might miss. Previously tested AI vulnerabilities through malicious prompt injections and built blockchain voting systems which taught me to think both like attacker and defender. I am discovering the best solutions come from various perspectives and genuine collaboration. Every conversation teaches me something new about how different people experience security challenges. I am always excited to connect with people and learn from their perspectives.
                                </p>
                            </div>

                            {/* Resume Button */}
                            <div className="mt-8">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "var(--cyber-green)", color: "#000000" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2 border border-cyber-green text-cyber-green font-mono font-bold rounded flex items-center gap-2 group transition-all"
                                    onClick={() => {
                                        // Open Resume Page
                                        window.open('/resume', '_blank');
                                        // Trigger Download
                                        // The provided instruction attempted to insert descriptive text here,
                                        // which would cause a syntax error and break the button's functionality.
                                        // To maintain syntactical correctness and the original intent of the button,
                                        // the original resume download logic is preserved.
                                        // If the intention was to add this text as a comment or in a different element,
                                        // please provide a more specific instruction for its placement.
                                        const link = document.createElement('a');
                                        link.href = '/resume.pdf';
                                        link.download = 'Eshwar_Desetty_Resume.pdf';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                >
                                    <span className="group-hover:animate-pulse">[VIEW_RESUME]</span>
                                    <span className="text-xl">↗</span>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
