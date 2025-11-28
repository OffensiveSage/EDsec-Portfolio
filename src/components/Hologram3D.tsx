"use client";

import { motion } from "framer-motion";

export default function Hologram3D() {
    return (
        <div className="relative w-64 h-64 perspective-1000">
            <motion.div
                className="absolute inset-0 preserve-3d"
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {/* Cube Wireframe */}
                <div className="absolute inset-0 border-2 border-cyber-green/30 transform-style-3d">
                    {/* Front */}
                    <div className="absolute inset-0 border border-cyber-green/50" style={{ transform: "translateZ(64px)" }} />
                    {/* Back */}
                    <div className="absolute inset-0 border border-cyber-green/50" style={{ transform: "translateZ(-64px)" }} />
                    {/* Right */}
                    <div className="absolute inset-0 border border-cyber-green/50" style={{ transform: "rotateY(90deg) translateZ(64px)" }} />
                    {/* Left */}
                    <div className="absolute inset-0 border border-cyber-green/50" style={{ transform: "rotateY(-90deg) translateZ(64px)" }} />
                    {/* Top */}
                    <div className="absolute inset-0 border border-cyber-green/50" style={{ transform: "rotateX(90deg) translateZ(64px)" }} />
                    {/* Bottom */}
                    <div className="absolute inset-0 border border-cyber-green/50" style={{ transform: "rotateX(-90deg) translateZ(64px)" }} />
                </div>

                {/* Inner rotating cube */}
                <motion.div
                    className="absolute inset-8 border border-cyber-neon/70"
                    animate={{ rotateX: 360, rotateZ: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: "preserve-3d" }}
                />

                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyber-green rounded-full animate-pulse"
                    style={{ boxShadow: "0 0 20px var(--cyber-green)" }} />
            </motion.div>
        </div>
    );
}
