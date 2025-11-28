"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BouncingElementProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
}

export default function BouncingElement({
    children,
    delay = 0,
    duration = 2,
    yOffset = 20,
    className = "",
}: BouncingElementProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -yOffset, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}
