"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);

    const statusMessages = useMemo(() => [
        "INITIALIZING_CORE_SYSTEMS",
        "LOADING_ENCRYPTION_KEYS",
        "ESTABLISHING_SECURE_CONNECTION",
        "BYPASSING_FIREWALL",
        "DECRYPTING_PAYLOAD",
        "SYNCHRONIZING_NODES",
        "FINALIZING_HANDSHAKE",
        "ACCESS_GRANTED"
    ], []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        const statusInterval = setInterval(() => {
            setStatusIndex((prev) => (prev + 1) % statusMessages.length);
        }, 400);

        return () => {
            clearInterval(interval);
            clearInterval(statusInterval);
        };
    }, [onComplete, statusMessages]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-black text-cyber-green overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Cracked Glass Effect Overlay */}
            <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
                {/* Shard 1 - Top Left */}
                <div
                    className="absolute inset-0 backdrop-blur-[2px] bg-cyber-green/5"
                    style={{ clipPath: "polygon(0 0, 30% 0, 15% 30%, 0 40%)" }}
                />
                {/* Shard 2 - Bottom Right */}
                <div
                    className="absolute inset-0 backdrop-blur-[1px] bg-cyber-green/5"
                    style={{ clipPath: "polygon(100% 100%, 60% 100%, 80% 60%, 100% 40%)" }}
                />
                {/* Crack Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                    <path d="M0 40 L15 30 L30 0" stroke="var(--cyber-green)" strokeWidth="1" fill="none" />
                    <path d="M100 40 L80 60 L60 100" stroke="var(--cyber-green)" strokeWidth="1" fill="none" />
                    <path d="M40 100 L50 80 L45 60 L60 40 L50 0" stroke="var(--cyber-green)" strokeWidth="0.5" fill="none" className="animate-pulse" />
                </svg>
            </div>

            <div className="flex flex-col items-center justify-center z-10 relative">
                {/* Clean Cyber Circle */}
                <div className="relative w-64 h-64 flex items-center justify-center rounded-full border border-cyber-green/20 bg-cyber-black/80 box-glow">
                    {/* Animated Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 p-2" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeOpacity="0.2"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="282.7"
                            strokeDashoffset={282.7 - (282.7 * progress) / 100}
                            className="text-cyber-green"
                        />
                    </svg>

                    <div className="flex items-baseline justify-center font-bold font-mono tracking-tighter tabular-nums text-glow relative z-10">
                        <span className="text-6xl md:text-7xl">{progress}</span>
                        <span className="text-cyber-neon text-3xl md:text-4xl ml-1">%</span>
                    </div>
                </div>

                <div className="mt-8 text-sm font-mono tracking-widest bg-cyber-black/40 p-2 rounded border border-cyber-green/10 text-cyber-green/80">
                    {statusMessages[statusIndex]}
                </div>
            </div>
        </motion.div>
    );
}
