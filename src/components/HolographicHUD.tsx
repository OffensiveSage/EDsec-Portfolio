"use client";

import { motion } from "framer-motion";

export default function HolographicHUD() {
    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Corner Brackets */}
            <div className="absolute top-24 left-8 w-32 h-32 border-t-2 border-l-2 border-cyber-green/30 rounded-tl-3xl" />
            <div className="absolute top-24 right-8 w-32 h-32 border-t-2 border-r-2 border-cyber-green/30 rounded-tr-3xl" />
            <div className="absolute bottom-8 left-8 w-32 h-32 border-b-2 border-l-2 border-cyber-green/30 rounded-bl-3xl" />
            <div className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-cyber-green/30 rounded-br-3xl" />

            {/* Rotating Rings (Top Right) */}
            <div className="absolute top-20 right-20 opacity-20">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border border-dashed border-cyber-green rounded-full flex items-center justify-center"
                >
                    <div className="w-40 h-40 border border-cyber-green/50 rounded-full" />
                </motion.div>
            </div>

            {/* Rotating Rings (Bottom Left) */}
            <div className="absolute bottom-20 left-20 opacity-20">
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border border-dotted border-cyber-green rounded-full flex items-center justify-center"
                >
                    <div className="w-56 h-56 border border-cyber-green/30 rounded-full" />
                </motion.div>
            </div>

            {/* Crosshairs */}
            <div className="absolute top-1/2 left-8 w-4 h-4 border-l border-t border-cyber-green/50" />
            <div className="absolute top-1/2 right-8 w-4 h-4 border-r border-t border-cyber-green/50" />

            {/* Status Text */}
            <div className="absolute bottom-12 left-12 font-mono text-xs text-cyber-green/50">
                SYSTEM_STATUS: ONLINE
                <br />
                SECURE_CONNECTION: TRUE
            </div>
        </div>
    );
}
