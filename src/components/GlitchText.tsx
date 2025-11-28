"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export default function GlitchText({ text, className }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let timeoutId: NodeJS.Timeout;

        const triggerGlitch = () => {
            if (!isMounted) return;
            setIsGlitching(true);
            setTimeout(() => {
                if (isMounted) setIsGlitching(false);
            }, 200);

            // Random next glitch
            const nextDelay = Math.random() * 3000 + 2000;
            timeoutId = setTimeout(triggerGlitch, nextDelay);
        };

        timeoutId = setTimeout(triggerGlitch, 2000);
        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className={clsx("relative inline-block", className)}>
            <span className="relative z-10">{text}</span>
            {isGlitching && (
                <>
                    <motion.span
                        className="absolute top-0 left-0 -z-10 text-cyber-red opacity-70"
                        initial={{ x: 0 }}
                        animate={{ x: [-2, 2, -1, 0] }}
                        transition={{ duration: 0.2 }}
                    >
                        {text}
                    </motion.span>
                    <motion.span
                        className="absolute top-0 left-0 -z-10 text-cyber-neon opacity-70"
                        initial={{ x: 0 }}
                        animate={{ x: [2, -2, 1, 0] }}
                        transition={{ duration: 0.2 }}
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </div>
    );
}
