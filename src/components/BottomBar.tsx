import { ArrowRight, Briefcase, FileText, Github, Home, Layers, Linkedin, PenLine } from "lucide-react";
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

// Floating action bar pinned to the bottom of the viewport.
export default function BottomBar() {
    return (
        <div className="fixed bottom-4 inset-x-0 z-50 px-4 flex justify-center pointer-events-none">
            <div className="flex items-stretch gap-2 sm:gap-3 pointer-events-auto">
                <a
                    href="#contact"
                    className="hidden sm:flex items-center gap-6 pl-5 pr-2 rounded-2xl bg-accent text-accent-ink font-medium shadow-lg hover:brightness-95 transition"
                >
                    Get in touch
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                    </span>
                </a>

                <nav className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-black text-white border border-white/10 shadow-lg" aria-label="Primary">
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
        </div>
    );
}
