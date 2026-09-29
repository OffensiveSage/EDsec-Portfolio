"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight, Briefcase, Check, Copy, FileText, Github, Home, Layers, Linkedin, MapPin, PenLine, X } from "lucide-react";
import { profile } from "@/data/portfolioData";

const nav = [
    { label: "Home", href: "#top", icon: Home },
    { label: "Work", href: "#work", icon: Layers },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Resume", href: "/resume", icon: FileText },
];

const social = [
    { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
    { label: "GitHub", href: profile.links.github, icon: Github },
    { label: "Medium", href: profile.links.medium, icon: PenLine },
];

const email = profile.links.email.replace("mailto:", "");
const ease = [0.22, 1, 0.36, 1] as const;

// Hide the bar while reading (scrolling down) and bring it back on scroll up,
// near the top, or near the end of the page. The "Get in touch" button docks
// in the top-right corner while the bar is hidden.
function useDocked() {
    const [docked, setDocked] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            const delta = y - lastY;
            if (Math.abs(delta) < 8) return;
            const nearTop = y < 160;
            const nearEnd = window.innerHeight + y >= document.documentElement.scrollHeight - 320;
            setDocked(!nearTop && !nearEnd && delta > 0);
            lastY = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return docked;
}

function ConnectCard({ docked, onClose }: { docked: boolean; onClose: () => void }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
        } catch {
            // Older browsers or blocked clipboard access: copy via a hidden field.
            const field = document.createElement("textarea");
            field.value = email;
            field.style.position = "fixed";
            field.style.opacity = "0";
            document.body.appendChild(field);
            field.select();
            document.execCommand("copy");
            field.remove();
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            role="dialog"
            aria-label="Contact details"
            initial={{ opacity: 0, y: docked ? -8 : 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: docked ? -8 : 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className={`absolute w-[min(352px,calc(100vw-32px))] rounded-3xl bg-bg text-ink border border-line shadow-2xl p-5 ${
                docked ? "top-full mt-3 right-0 origin-top-right" : "bottom-full mb-3 left-0 origin-bottom-left"
            }`}
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="font-display text-xl font-medium tracking-tight">Let&apos;s connect</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                        <span className="w-2 h-2 rounded-full bg-accent" /> Open to security roles
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                        <MapPin className="w-3.5 h-3.5" /> Pittsburgh, PA
                    </p>
                </div>
                <button onClick={onClose} aria-label="Close" className="p-1 -m-1 rounded-full hover:bg-surface transition">
                    <X className="w-4 h-4" />
                </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2 rounded-2xl bg-surface pl-4 pr-1.5 py-1.5">
                <a href={profile.links.email} className="text-[13px] font-medium truncate hover:opacity-70 transition">{email}</a>
                <button
                    onClick={copy}
                    aria-label="Copy email address"
                    className="shrink-0 flex items-center gap-1.5 rounded-xl bg-bg px-2.5 py-1.5 text-xs font-medium hover:bg-line transition"
                >
                    {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2">
                {[...social, { label: "Resume", href: "/resume", icon: FileText }].map(({ label, href, icon: Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex flex-col items-center gap-1 rounded-2xl border border-line py-2.5 text-[11px] hover:bg-surface transition"
                    >
                        <Icon className="w-4 h-4" />
                        {label}
                    </a>
                ))}
            </div>

            <a
                href="#contact"
                onClick={onClose}
                className="mt-4 flex items-center justify-between rounded-2xl bg-card text-card-ink pl-4 pr-1.5 py-1.5 font-medium hover:opacity-90 transition"
            >
                Write a message
                <span className="w-8 h-8 rounded-full bg-accent text-accent-ink flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                </span>
            </a>
        </motion.div>
    );
}

function GetInTouch({ docked, open, onToggle }: { docked: boolean; open: boolean; onToggle: () => void }) {
    return (
        <motion.button
            layoutId="get-in-touch"
            transition={{ layout: { duration: 0.55, ease } }}
            onClick={onToggle}
            aria-expanded={open}
            aria-haspopup="dialog"
            className={`flex items-center rounded-2xl bg-accent text-accent-ink font-medium shadow-lg hover:brightness-95 ${
                docked ? "gap-3 pl-4 pr-1.5 py-1.5 text-sm" : "h-full gap-6 pl-5 pr-2"
            }`}
        >
            <motion.span layout="position">Get in touch</motion.span>
            <motion.span
                layout="position"
                className={`rounded-full bg-card text-card-ink flex items-center justify-center ${docked ? "w-7 h-7" : "w-8 h-8"}`}
            >
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${open ? (docked ? "rotate-90" : "-rotate-90") : ""}`} />
            </motion.span>
        </motion.button>
    );
}

// Floating action bar pinned to the bottom of the viewport.
export default function BottomBar() {
    const docked = useDocked();
    // Remember where the card was opened; it closes itself when the button moves.
    const [openedWhenDocked, setOpenedWhenDocked] = useState<boolean | null>(null);
    const open = openedWhenDocked === docked;
    const close = () => setOpenedWhenDocked(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Close the card on Escape or on an outside click.
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenedWhenDocked(null);
        const onClick = (e: MouseEvent) => {
            if (ctaRef.current && !ctaRef.current.contains(e.target as Node)) setOpenedWhenDocked(null);
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClick);
        };
    }, [open]);

    const cta = (
        <div ref={ctaRef} className="relative h-full">
            <GetInTouch docked={docked} open={open} onToggle={() => setOpenedWhenDocked(open ? null : docked)} />
            <AnimatePresence>{open && <ConnectCard docked={docked} onClose={close} />}</AnimatePresence>
        </div>
    );

    return (
        <LayoutGroup>
            {docked && (
                <motion.div layoutRoot className="fixed top-12 lg:top-14 right-4 sm:right-6 z-50">
                    {cta}
                </motion.div>
            )}

            <motion.div
                layoutRoot
                className="fixed bottom-4 inset-x-0 z-50 px-4 flex justify-center pointer-events-none"
                animate={{ y: docked ? 110 : 0, opacity: docked ? 0 : 1 }}
                transition={{ duration: 0.4, ease }}
            >
                <div className="flex items-stretch gap-2 sm:gap-3 pointer-events-auto">
                    {!docked && <div className="hidden sm:block">{cta}</div>}

                    <nav className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-card text-card-ink border border-white/10 shadow-lg" aria-label="Primary">
                        {nav.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                className="flex flex-col items-center gap-0.5 px-3 sm:px-4 py-1 rounded-xl text-[11px] hover:bg-white/10 transition"
                            >
                                <Icon className="w-4 h-4" />
                                {label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="sm:hidden flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[11px] text-accent"
                        >
                            <ArrowRight className="w-4 h-4" />
                            Contact
                        </a>
                    </nav>

                    <div className="hidden md:flex items-center gap-3 pl-5 pr-2 rounded-2xl bg-bg border border-line shadow-lg">
                        <span className="text-sm">Connect</span>
                        <div className="flex gap-1.5">
                            {social.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-8 h-8 rounded-full border border-ink flex items-center justify-center hover:bg-ink hover:text-bg transition"
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </LayoutGroup>
    );
}
