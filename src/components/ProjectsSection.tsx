"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Folder, Github, ExternalLink, Terminal, Code, Shield } from "lucide-react";
import { projects } from "@/data/portfolioData";

export default function ProjectsSection() {
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
    const [deniedId, setDeniedId] = useState<number | null>(null);

    const toggleFlip = (id: number) => {
        setFlippedCards((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <section id="projects" className="min-h-screen flex items-center snap-start relative z-10 bg-cyber-black">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-12 flex items-center gap-3">
                        <Folder className="w-8 h-8 text-cyber-green" />
                        <span className="text-cyber-green">{">"}</span> CASE_FILES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="perspective-1000 h-80"
                                onClick={() => toggleFlip(project.id)}
                            >
                                <motion.div
                                    className="relative w-full h-full cursor-pointer preserve-3d"
                                    animate={{ rotateY: flippedCards.has(project.id) ? 180 : 0 }}
                                    transition={{ duration: 0.6 }}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Front of card */}
                                    <div
                                        className="absolute inset-0 backface-hidden border border-cyber-gray/30 bg-cyber-gray/10 p-6 rounded hover:bg-cyber-gray/20 transition-all overflow-hidden"
                                        style={{ backfaceVisibility: "hidden" }}
                                    >
                                        <div className="absolute inset-0 bg-cyber-green/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

                                        <div className="flex justify-between items-start mb-4">
                                            <Terminal className="w-8 h-8 text-cyber-gray group-hover:text-cyber-green transition-colors" />
                                            <div className="flex gap-3">
                                                <a
                                                    href={project.links.github}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                                {project.links.demo && (
                                                    <a
                                                        href={project.links.demo}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:text-cyber-neon transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-xs font-mono text-cyber-green/80">
                                                    #{t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="absolute bottom-4 right-4 text-xs text-cyber-green/50 font-mono">
                                            Click to flip →
                                        </div>
                                    </div>

                                    {/* Back of card */}
                                    <div
                                        className="absolute inset-0 backface-hidden border border-cyber-neon bg-cyber-black p-6 rounded flex flex-col justify-center items-center text-center"
                                        style={{
                                            backfaceVisibility: "hidden",
                                            transform: "rotateY(180deg)"
                                        }}
                                    >
                                        <Shield className="w-16 h-16 text-cyber-neon mb-4 animate-pulse" />
                                        <h3 className="text-2xl font-bold text-cyber-neon mb-4 font-mono">
                                            {project.title}
                                        </h3>
                                        <div className="space-y-3 text-left w-full">
                                            <div className="flex items-start gap-2">
                                                <Code className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-xs text-gray-400 font-mono">TECH_STACK</p>
                                                    <p className="text-sm text-white">{project.tech.join(", ")}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Terminal className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-xs text-gray-400 font-mono">STATUS</p>
                                                    <p className="text-sm text-cyber-green">OPERATIONAL</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex gap-4">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (project.title === "Energy Sector Threat Intel") {
                                                        e.preventDefault();
                                                        setDeniedId(project.id);
                                                        setTimeout(() => setDeniedId(null), 3000);
                                                    } else {
                                                        window.open(project.links.github, "_blank");
                                                    }
                                                }}
                                                className={`px-4 py-2 border text-xs font-mono transition-all rounded ${deniedId === project.id
                                                    ? "border-red-500 text-red-500 bg-red-500/10"
                                                    : "border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black"
                                                    }`}
                                            >
                                                {deniedId === project.id ? "ACCESS_DENIED" : "VIEW_CODE"}
                                            </button>
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="px-4 py-2 bg-cyber-neon text-black text-xs font-mono hover:bg-white transition-all rounded"
                                                >
                                                    LIVE_DEMO
                                                </a>
                                            )}
                                        </div>
                                        <div className="absolute bottom-4 right-4 text-xs text-cyber-green/50 font-mono">
                                            ← Click to flip back
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
