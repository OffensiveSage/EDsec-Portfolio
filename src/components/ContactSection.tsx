"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {

    return (
        <section id="contact" className="min-h-screen flex items-center snap-start relative z-10 bg-cyber-black">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-12">
                        GET_IN_TOUCH
                    </h2>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <motion.a
                            href="mailto:eshwar.desetty03@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-8 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition-colors group flex flex-col items-center justify-center"
                        >
                            <Mail className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-mono text-gray-400 group-hover:text-red-400 transition-colors">EMAIL</p>
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/eshwar-desetty"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-8 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-colors group flex flex-col items-center justify-center"
                        >
                            <Linkedin className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-mono text-gray-400 group-hover:text-blue-400 transition-colors">LINKEDIN</p>
                        </motion.a>
                        <motion.a
                            href="https://github.com/OffensiveSage"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-8 border border-white/20 rounded-lg hover:bg-white/10 transition-colors group flex flex-col items-center justify-center"
                        >
                            <Github className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors">GITHUB</p>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
