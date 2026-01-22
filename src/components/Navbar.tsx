"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false); // Close mobile menu after navigation
        }
    };

    const navItems = [
        { label: "HOME", href: "#hero" },
        { label: "IDENTITY", href: "#about" },
        { label: "ACADEMICS", href: "#education" },
        { label: "ARSENAL", href: "#skills" },
        { label: "LOGS", href: "#experience" },
        { label: "CASE_FILES", href: "#projects" },
        { label: "ARTICLES", href: "#articles" },
        { label: "CONTACT", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-cyber-black/80 backdrop-blur-md border-b border-cyber-green/20"
            >
            <div
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => scrollToSection("hero")}
            >
                <Shield className="w-6 h-6 text-cyber-green group-hover:text-cyber-neon transition-colors" />
                <span className="font-mono font-bold text-white tracking-wider group-hover:text-cyber-green transition-colors">
                    ED_SEC<span className="text-cyber-green animate-cursor-blink">_</span>
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => scrollToSection(item.href.substring(1))}
                        className="text-xs font-mono text-gray-400 hover:text-cyber-neon transition-colors tracking-widest relative group"
                    >
                        <span className="text-cyber-green opacity-0 group-hover:opacity-100 transition-opacity mr-1">{">"}</span>
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-neon group-hover:w-full transition-all duration-300" />
                    </button>
                ))}
                <a
                    href="/resume"
                    className="px-4 py-2 border border-cyber-green/50 text-cyber-green text-xs font-mono hover:bg-cyber-green hover:text-black transition-all ml-4"
                >
                    [VIEW_RESUME]
                </a>
            </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}
                    className="md:hidden p-2 text-cyber-green hover:text-cyber-neon active:text-cyber-neon transition-colors touch-manipulation relative z-[60]"
                    aria-label="Toggle menu"
                    type="button"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-cyber-black/90 backdrop-blur-md z-[45] md:hidden"
                        />
                    
                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-64 bg-cyber-black/95 backdrop-blur-md border-l border-cyber-green/20 z-[55] md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col p-6 pt-20">
                            {navItems.map((item, index) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href.substring(1))}
                                    className="text-left py-4 px-4 text-sm font-mono text-gray-400 hover:text-cyber-neon hover:bg-cyber-gray/30 transition-colors border-b border-cyber-gray/10 touch-manipulation"
                                    style={{ minHeight: '44px' }}
                                    type="button"
                                >
                                    <span className="text-cyber-green mr-2">{">"}</span>
                                    {item.label}
                                </button>
                            ))}
                            <a
                                href="/resume"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 px-4 py-3 border border-cyber-green/50 text-cyber-green text-sm font-mono hover:bg-cyber-green hover:text-black transition-all text-center touch-manipulation"
                                style={{ minHeight: '44px' }}
                            >
                                [VIEW_RESUME]
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </>
    );
}
