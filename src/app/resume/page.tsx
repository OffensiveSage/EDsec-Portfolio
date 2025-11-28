"use client";

import { ArrowLeft, Printer, Download } from "lucide-react";
import Link from "next/link";
import { experiences, projects } from "@/data/portfolioData";

export default function ResumePage() {
    return (
        <div className="h-screen w-full overflow-y-auto bg-cyber-black text-cyber-green font-mono p-8 md:p-16 selection:bg-cyber-green selection:text-black scrollbar-thin scrollbar-thumb-cyber-green/30">
            {/* Navigation / Actions */}
            <div className="fixed top-0 left-0 w-full bg-cyber-black/90 backdrop-blur-sm border-b border-cyber-green/30 p-4 flex justify-between items-center print:hidden z-50">
                <Link href="/" className="flex items-center gap-2 text-sm hover:text-cyber-neon transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    RETURN_TO_BASE
                </Link>
                <div className="flex items-center gap-3">
                    <a
                        href="/resume.pdf"
                        download="Eshwar_Desetty_Resume.pdf"
                        className="flex items-center gap-2 border border-cyber-green text-cyber-green px-4 py-2 rounded text-sm hover:bg-cyber-green hover:text-black transition-all hover:box-glow"
                    >
                        <Download className="w-4 h-4" />
                        DOWNLOAD_RESUME
                    </a>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 border border-cyber-neon text-cyber-neon px-4 py-2 rounded text-sm hover:bg-cyber-neon hover:text-black transition-all"
                    >
                        <Printer className="w-4 h-4" />
                        PRINT_PDF
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-20 print:mt-0 print:text-black">
                {/* Header */}
                <header className="border-b-4 border-cyber-green pb-8 mb-12 relative">
                    <div className="absolute top-0 right-0 text-xs text-cyber-gray hidden md:block">
                        ID: ESH-9024-SEC
                        <br />
                        STATUS: ACTIVE
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter text-white text-glow">ESHWAR DESETTY</h1>
                    <div className="flex flex-wrap gap-6 text-sm text-cyber-neon">
                        <span>{'//'} CYBER SECURITY SPECIALIST</span>
                        <span>{'//'} TECHNOLOGY LEAD</span>
                        <span>{'//'} PENETRATION TESTER</span>
                    </div>
                </header>

                {/* Experience */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-cyber-green text-black px-2 py-1 text-sm font-bold">01</span>
                        <span className="text-white">MISSION_LOGS</span>
                    </h2>
                    <div className="space-y-12">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="relative pl-8 border-l border-cyber-green/30">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-cyber-green rounded-full box-glow" />
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                    <h3 className="text-xl font-bold text-cyber-neon">{exp.role}</h3>
                                    <span className="text-sm text-cyber-green font-bold font-mono drop-shadow-[0_0_3px_rgba(0,255,65,0.5)]">{exp.period}</span>
                                </div>
                                <div className="text-sm font-bold mb-4 text-white">{exp.company}</div>
                                <p className="text-gray-400 mb-4 leading-relaxed max-w-3xl">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="text-xs border border-cyber-green/50 text-cyber-green/80 px-2 py-1 rounded hover:bg-cyber-green/10 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="bg-cyber-green text-black px-2 py-1 text-sm font-bold">02</span>
                        <span className="text-white">CASE_FILES</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((proj) => (
                            <div key={proj.id} className="border border-cyber-green/30 p-6 bg-cyber-gray/10 hover:border-cyber-green hover:bg-cyber-green/5 transition-all group">
                                <h3 className="text-lg font-bold mb-2 text-cyber-neon group-hover:text-cyber-green transition-colors">{proj.title}</h3>
                                <p className="text-sm text-gray-400 mb-4 h-20 overflow-hidden">{proj.description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {proj.tech.map((t) => (
                                        <span key={t} className="text-[10px] bg-cyber-green/10 text-cyber-green border border-cyber-green/20 px-1.5 py-0.5 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center text-xs text-cyber-gray mt-20 border-t border-cyber-green/20 pt-8 pb-8">
                    GENERATED BY ESHWAR_DESETTY_PORTFOLIO_SYSTEM // SECURE DOCUMENT
                </footer>
            </div>
        </div>
    );
}
