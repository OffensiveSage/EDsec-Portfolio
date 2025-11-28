"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { label: "HOME", href: "#hero" },
        { label: "IDENTITY", href: "#about" },
        { label: "ACADEMICS", href: "#education" },
        { label: "ARSENAL", href: "#skills" },
        { label: "LOGS", href: "#experience" },
        { label: "CASE_FILES", href: "#projects" },
        { label: "CONTACT", href: "#contact" },
    ];

    return (
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

            {/* Mobile Menu Button (Simple placeholder for now) */}
            <div className="md:hidden text-cyber-green font-mono text-xs">
                [MENU]
            </div>
        </motion.nav>
    );
}
