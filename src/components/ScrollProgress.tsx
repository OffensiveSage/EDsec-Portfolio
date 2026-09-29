"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

const sections = [
    { id: "work", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

// Thin line across the top with a shield that travels along it as you scroll.
// Each section has a clickable marker placed where that section starts.
export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    const [marks, setMarks] = useState<{ id: string; label: string; at: number }[]>([]);
    // Labels show briefly on the first visit so people learn the dots are clickable.
    const [intro, setIntro] = useState(false);

    useEffect(() => {
        let seen = false;
        try {
            seen = sessionStorage.getItem("sectionHintSeen") === "1";
            sessionStorage.setItem("sectionHintSeen", "1");
        } catch {}
        if (seen) return;
        const start = setTimeout(() => setIntro(true), 600);
        const end = setTimeout(() => setIntro(false), 4600);
        return () => {
            clearTimeout(start);
            clearTimeout(end);
        };
    }, []);

    useEffect(() => {
        const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

        const update = () => {
            const max = maxScroll();
            setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
        };

        const measure = () => {
            const max = maxScroll();
            if (max <= 0) return;
            const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
            setMarks(
                sections.flatMap((s) => {
                    const el = document.getElementById(s.id);
                    if (!el) return [];
                    const top = el.getBoundingClientRect().top + window.scrollY - padding;
                    return [{ ...s, at: Math.min(1, Math.max(0, top / max)) }];
                })
            );
            update();
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(document.body);
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", measure);
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", measure);
        };
    }, []);

    return (
        <div className="fixed top-0 inset-x-0 z-50 h-9 lg:h-11 px-4 sm:px-6 bg-bg/80 backdrop-blur-sm pointer-events-none">
            <nav className="group/bar relative h-full flex items-center pointer-events-auto" aria-label="Sections">
                <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-ink" />
                <div className="absolute left-0 right-0 h-px bg-line" />
                <div className="absolute left-0 h-px bg-ink" style={{ width: `${progress * 100}%` }} />
                <span className="absolute right-0 w-1.5 h-1.5 bg-ink" />

                {marks.map((m) => {
                    const passed = progress >= m.at - 0.001;
                    return (
                        <a
                            key={m.id}
                            href={`#${m.id}`}
                            aria-label={m.label}
                            title={m.label}
                            className="group absolute -translate-x-1/2 h-full flex items-center px-1.5 pointer-events-auto"
                            style={{ left: `clamp(18px, ${m.at * 100}%, calc(100% - 18px))` }}
                        >
                            <span
                                className={`block w-2 h-2 rounded-full border transition ${
                                    passed ? "bg-ink border-ink" : "bg-bg border-muted"
                                } group-hover:bg-accent group-hover:border-accent group-hover:scale-125`}
                            />
                            <span
                                className={`hidden lg:block absolute top-[calc(50%+4px)] ${m.at > 0.92 ? "right-0" : "left-1/2 -translate-x-1/2"} text-[11px] leading-none whitespace-nowrap transition-opacity duration-500 ${
                                    passed ? "text-ink" : "text-muted"
                                } ${intro ? "opacity-100" : "opacity-0"} group-hover/bar:opacity-100 group-hover:text-accent`}
                            >
                                {m.label}
                            </span>
                        </a>
                    );
                })}

                <div
                    className="absolute z-10 -translate-x-1/2 flex items-center justify-center w-9 h-5 rounded-full bg-surface border border-line shadow-sm"
                    style={{ left: `clamp(18px, ${progress * 100}%, calc(100% - 18px))` }}
                >
                    <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.2} />
                </div>

                <span
                    aria-hidden="true"
                    className={`lg:hidden absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-card text-card-ink text-xs px-3 py-1.5 shadow-lg transition-opacity duration-500 pointer-events-none ${
                        intro ? "opacity-100" : "opacity-0"
                    }`}
                >
                    Tap a dot to jump to a section
                </span>
            </nav>
        </div>
    );
}
