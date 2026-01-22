"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Code, Lock, Server, FileCheck } from "lucide-react";

const skills = [
    {
        category: "Security Tools",
        icon: Zap,
        items: [
            { name: "Splunk & ELK Stack", level: 90 },
            { name: "Burp Suite & Nessus", level: 92 },
            { name: "Wireshark & tcpdump", level: 94 },
            { name: "Nmap & Suricata", level: 90 },
        ]
    },
    {
        category: "Scripting & Systems",
        icon: Code,
        items: [
            { name: "Python & Bash", level: 92 },
            { name: "PowerShell", level: 88 },
            { name: "Linux Administration", level: 90 },
            { name: "Windows & macOS", level: 88 },
            { name: "YARA Rules", level: 85 }
        ]
    },
    {
        category: "Security Operations",
        icon: Shield,
        items: [
            { name: "Log Monitoring & Alert Triage", level: 90 },
            { name: "Incident Response", level: 88 },
            { name: "Vulnerability Assessment", level: 92 },
            { name: "Risk Management", level: 89 }
        ]
    },
    {
        category: "OT & Critical Infrastructure",
        icon: Server,
        items: [
            { name: "ICS & SCADA Awareness", level: 85 },
            { name: "OT Security Fundamentals", level: 86 },
            { name: "Network Segmentation", level: 84 },
            { name: "Asset Visibility", level: 82 }
        ]
    },
    {
        category: "Security GRC",
        icon: FileCheck,
        items: [
            { name: "Risk Assessments", level: 88 },
            { name: "Security Policy Drafting", level: 86 },
            { name: "Control Mapping", level: 85 },
            { name: "Audit Evidence Support", level: 84 }
        ]
    },
    {
        category: "Frameworks & Standards",
        icon: Lock,
        items: [
            { name: "NIST CSF", level: 90 },
            { name: "ISO 27001", level: 88 },
            { name: "PCI DSS & HIPAA", level: 86 },
            { name: "GDPR & OWASP Top 10", level: 85 }
        ]
    }
];

const certifications = [
    "CISSP (Candidate)",
    "CompTIA Security+ (Candidate)",
    "Google Bits and Bytes of Computer Networking"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-cyber-green/30 rounded-lg p-5 bg-cyber-gray/10 backdrop-blur-sm hover:border-cyber-green/60 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <skillGroup.icon className="w-5 h-5 text-cyber-green" />
                                <h3 className="text-lg font-bold text-cyber-neon font-mono">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {skillGroup.items.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-xs text-gray-300 font-mono">{skill.name}</span>
                                            <span className="text-xs text-cyber-green font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-cyber-gray/30 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-cyber-green to-cyber-neon relative"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{
                                                    duration: 1,
                                                    delay: groupIndex * 0.1 + skillIndex * 0.05,
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
