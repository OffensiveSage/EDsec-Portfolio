"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    y: number;
}

export default function MouseTrail() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        let particleId = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const newParticle: Particle = {
                id: particleId++,
                x: e.clientX,
                y: e.clientY,
            };

            setParticles((prev) => [...prev, newParticle]);

            // Remove particle after animation
            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
            }, 1000);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute w-2 h-2 bg-cyber-green rounded-full"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            boxShadow: "0 0 10px var(--cyber-green)",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
