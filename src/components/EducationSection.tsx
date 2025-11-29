"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "@/data/portfolioData";

interface EducationItem {
    id: number;
    degree: string;
    school: string;
    period: string;
    description: string;
    achievements: string[];
}

export default function EducationSection() {
    return (
        <section id="education" className="min-h-screen flex items-center snap-start relative z-10 bg-cyber-black/90">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-12 flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-cyber-green" />
                        <span className="text-cyber-green">{">"}</span> ACADEMIC_LOGS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu: EducationItem, index: number) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-cyber-green/5 rounded-lg transform transition-transform group-hover:scale-105 duration-300" />
                                <div className="relative p-6 border border-cyber-green/30 rounded-lg bg-cyber-black/50 backdrop-blur-sm hover:border-cyber-green transition-colors">
                                    {/* Corner Accents */}
                                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-green" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-green" />

                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white font-mono mb-1">{edu.degree}</h3>
                                            <p className="text-cyber-green font-mono text-sm">{edu.school}</p>
                                        </div>
                                        <div className="px-3 py-1 rounded-full border border-cyber-green/20 bg-cyber-green/5 text-xs font-mono text-cyber-neon flex items-center gap-2">
                                            <Calendar className="w-3 h-3" />
                                            {edu.period}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed font-mono">
                                        {edu.description}
                                    </p>

                                    <div className="space-y-2">
                                        {edu.achievements.map((achievement: string, i: number) => (
                                            <div key={i} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                                                <Award className="w-3 h-3 text-cyber-purple" />
                                                <span>{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
