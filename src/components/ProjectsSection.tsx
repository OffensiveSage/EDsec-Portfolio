"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Plus } from "lucide-react";
import { articles, projects } from "@/data/portfolioData";
import SectionHeader from "./SectionHeader";

// Each project reads like a story teaser: tag, title, one-line outcome, expandable detail.
export default function ProjectsSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="work" className="px-4 sm:px-6 py-16 md:py-24 border-t border-line">
            <SectionHeader tag="Selected work" title="Projects & case studies" />

            <ul className="border-t border-line">
                {projects.map((p, i) => {
                    const isOpen = open === p.id;
                    const hasRepo = p.links.github && p.links.github !== "#";
                    return (
                        <li key={p.id} className="border-b border-line">
                            <button
                                onClick={() => setOpen(isOpen ? null : p.id)}
                                aria-expanded={isOpen}
                                className="w-full text-left py-6 md:py-8 grid gap-3 md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)] items-start group"
                            >
                                <span className="flex items-center gap-3 text-sm text-muted">
                                    <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="rounded-full bg-tag text-tag-ink px-3 py-1 font-medium">{p.category}</span>
                                </span>
                                <span className="flex gap-6 items-start">
                                    <span className="flex-1">
                                        <span className="block font-display text-2xl sm:text-3xl font-medium tracking-tight group-hover:opacity-70 transition">
                                            {p.title}
                                        </span>
                                        <span className="block mt-2 text-muted text-lg">{p.summary}</span>
                                    </span>
                                    <Plus
                                        className={`w-6 h-6 mt-1 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                    />
                                </span>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="pb-8 md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)]">
                                        <div />
                                        <div className="max-w-2xl">
                                            <p className="leading-relaxed">{p.description}</p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {p.tech.map((t) => (
                                                    <span key={t} className="rounded-full bg-surface px-3 py-1 text-sm">{t}</span>
                                                ))}
                                            </div>
                                            {hasRepo && (
                                                <a
                                                    href={p.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-5 inline-flex items-center gap-2 font-medium link-underline"
                                                >
                                                    <Github className="w-4 h-4" /> View on GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {articles.length > 0 && (
                <div className="mt-16">
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight mb-6">Writing</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {articles.map((a) => (
                            <a
                                key={a.id}
                                href={a.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-3xl bg-card text-card-ink p-6 sm:p-8 flex flex-col gap-6 hover:-translate-y-0.5 transition"
                            >
                                <span className="flex justify-between text-sm text-card-muted">
                                    {a.platform} · {a.date}
                                    <ArrowUpRight className="w-5 h-5 text-card-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                                </span>
                                <span className="font-display text-2xl font-medium tracking-tight">{a.title}</span>
                                <span className="text-card-muted">{a.description}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
