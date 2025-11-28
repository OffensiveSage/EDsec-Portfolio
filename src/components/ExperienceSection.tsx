"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolioData";

export default function ExperienceSection() {
    return (
        <section id="experience" className="min-h-screen flex items-center snap-start relative z-10 bg-cyber-black/80">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-12 flex items-center gap-3">
                        <Briefcase className="w-8 h-8 text-cyber-green" />
                        <span className="text-cyber-green">{">"}</span> MISSION_LOGS
                    </h2>

                    <div className="relative border-l-2 border-cyber-gray/30 ml-3 md:ml-6 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Node */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyber-black border-2 border-cyber-green rounded-full box-glow" />

                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-white font-mono">{exp.role}</h3>
                                    <span className="hidden md:block text-cyber-gray">{'//'}</span>
                                    <span className="text-cyber-green font-mono">{exp.company}</span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-cyber-neon/80 font-mono mb-4">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </div>

                                <p className="text-gray-400 mb-4 max-w-2xl leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs font-mono border border-cyber-gray/50 rounded text-cyber-gray hover:text-cyber-green hover:border-cyber-green transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
