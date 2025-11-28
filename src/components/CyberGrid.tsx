"use client";

import { motion } from "framer-motion";

export default function CyberGrid() {
    return (
        <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none z-0">
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: "linear-gradient(to bottom, transparent 0%, var(--cyber-black) 100%)",
                    zIndex: 2
                }}
            />

            <motion.div
                className="w-full h-[200%] absolute -top-[50%] left-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, var(--cyber-green) 1px, transparent 1px),
            linear-gradient(to bottom, var(--cyber-green) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                    transform: "perspective(500px) rotateX(60deg)",
                    transformOrigin: "center top",
                    opacity: 0.15,
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "0px 40px"]
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
}
