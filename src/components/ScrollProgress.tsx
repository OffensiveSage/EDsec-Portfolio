"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

// Thin line across the top with a shield that travels along it as you scroll.
export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div className="fixed top-0 inset-x-0 z-50 h-9 px-4 sm:px-6 bg-bg/80 backdrop-blur-sm pointer-events-none">
            <div className="relative h-full flex items-center">
                <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-ink" />
                <div className="absolute left-0 right-0 h-px bg-line" />
                <div className="absolute left-0 h-px bg-ink" style={{ width: `${progress * 100}%` }} />
                <span className="absolute right-0 w-1.5 h-1.5 bg-ink" />
                <div
                    className="absolute -translate-x-1/2 flex items-center justify-center w-9 h-5 rounded-full bg-surface border border-line shadow-sm"
                    style={{ left: `clamp(18px, ${progress * 100}%, calc(100% - 18px))` }}
                >
                    <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.2} />
                </div>
            </div>
        </div>
    );
}
