"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar, Tag } from "lucide-react";
import { articles } from "@/data/portfolioData";

export default function ArticlesSection() {
    return (
        <section id="articles" className="min-h-screen flex flex-col justify-center snap-start py-20 relative z-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-mono text-cyber-neon mb-4 flex items-center gap-3"
                >
                    <FileText className="w-8 h-8 text-cyber-green" />
                    <span className="text-cyber-green">{">"}</span> PUBLISHED_ARTICLES
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 font-mono text-sm mb-12"
                >
                    // Sharing knowledge and insights on cybersecurity, technology, and beyond
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <motion.a
                            key={article.id}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, borderColor: "var(--cyber-green)" }}
                            className="group border border-cyber-green/30 rounded-lg p-6 bg-cyber-gray/10 backdrop-blur-sm hover:bg-cyber-gray/20 transition-all cursor-pointer block"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2 text-xs text-cyber-green font-mono">
                                    <Calendar className="w-3 h-3" />
                                    {article.date}
                                </div>
                                <span className="text-xs font-mono px-2 py-1 border border-cyber-purple/50 text-cyber-purple rounded">
                                    {article.platform}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-white font-mono mb-3 group-hover:text-cyber-neon transition-colors line-clamp-2">
                                {article.title}
                            </h3>

                            <p className="text-gray-400 text-sm font-mono mb-4 line-clamp-3">
                                {article.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="flex items-center gap-1 text-xs font-mono px-2 py-1 bg-cyber-gray/30 text-gray-300 rounded"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-cyber-green text-sm font-mono group-hover:text-cyber-neon transition-colors">
                                <span>READ_ARTICLE</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {articles.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center py-16 border border-dashed border-cyber-green/30 rounded-lg"
                    >
                        <FileText className="w-12 h-12 text-cyber-green/50 mx-auto mb-4" />
                        <p className="text-gray-500 font-mono">// No articles published yet</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
