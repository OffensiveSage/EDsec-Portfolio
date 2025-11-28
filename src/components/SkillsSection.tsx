"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Code, Lock } from "lucide-react";

const skills = [
    {
        category: "Security Tools & Platforms",
        icon: Zap,
        items: [
            { name: "SIEM (Splunk/ELK)", level: 90 },
            { name: "Burp Suite & Metasploit", level: 94 },
            { name: "Wireshark & Nmap", level: 92 },
            { name: "EDR / IDS / IPS", level: 88 },
            { name: "Azure & Cloud Security", level: 85 }
        ]
    },
    {
        category: "Scripting & Automation",
        icon: Code,
        items: [
            { name: "Python & Bash", level: 92 },
            { name: "PowerShell & CLI", level: 88 },
            { name: "OS Security (Linux/Win/Mac)", level: 90 },
            { name: "Security Automation (SOAR)", level: 86 },
            { name: "Yara Rules", level: 84 }
        ]
    },
    {
        category: "Risk & Vulnerability Mgmt",
        icon: Shield,
        items: [
            { name: "Penetration Testing", level: 95 },
            { name: "Vulnerability Scanning", level: 92 },
            { name: "Risk Management", level: 89 },
            { name: "Compliance (NIST/ISO/GDPR)", level: 85 }
        ]
    }
];

const certifications = [
    "CISSP (Pursuing)",
    "CompTIA Security+ (Pursuing)",
    "Google Bits & Bytes of Computer Networks"
];

export default function SkillsSection() {
    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center snap-start py-20 relative z-10 bg-cyber-black/50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-12 flex items-center gap-3"
                >
                    <Lock className="w-8 h-8 text-cyber-green" />
                    <span className="text-cyber-green">{">"}</span> CYBER_ARSENAL
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="border border-cyber-green/30 rounded-lg p-6 bg-cyber-gray/10 backdrop-blur-sm hover:border-cyber-green/60 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <skillGroup.icon className="w-6 h-6 text-cyber-green" />
                                <h3 className="text-xl font-bold text-cyber-neon font-mono">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {skillGroup.items.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-300 font-mono">{skill.name}</span>
                                            <span className="text-xs text-cyber-green font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-cyber-gray/30 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-cyber-green to-cyber-neon relative"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{
                                                    duration: 1,
                                                    delay: groupIndex * 0.2 + skillIndex * 0.1,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ once: true }}
                                                style={{
                                                    boxShadow: `0 0 10px var(--cyber-green)`
                                                }}
                                            >
                                                {/* Animated glow effect */}
                                                <motion.div
                                                    className="absolute inset-0 bg-white/20"
                                                    animate={{
                                                        x: ["-100%", "100%"]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                        delay: skillIndex * 0.3
                                                    }}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="border-t border-cyber-green/30 pt-8"
                >
                    <h3 className="text-2xl font-bold font-mono text-cyber-neon mb-6 flex items-center gap-3">
                        <span className="text-cyber-green">{">"}</span> CERTIFICATION_STATUS
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="border border-cyber-green text-cyber-green px-4 py-2 rounded font-mono text-sm hover:bg-cyber-green hover:text-black transition-all cursor-default"
                            >
                                {cert}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
