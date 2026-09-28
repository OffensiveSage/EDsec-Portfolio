import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { education, experiences, profile, projects } from "@/data/portfolioData";

export default function ResumePage() {
    return (
        <div className="min-h-screen">
            <div className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-line print:hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium link-underline">
                        <ArrowLeft className="w-4 h-4" /> Back to portfolio
                    </Link>
                    <a
                        href="/resume.pdf"
                        download="Eshwar_Desetty_Resume.pdf"
                        className="inline-flex items-center gap-2 rounded-2xl bg-ink text-bg px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                    >
                        <Download className="w-4 h-4" /> Download PDF
                    </a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <header className="rounded-3xl bg-card text-card-ink p-6 sm:p-10 mb-14">
                    <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight">{profile.name}</h1>
                    <p className="mt-2 text-card-muted text-lg">{profile.title}</p>
                </header>

                <section className="mb-14">
                    <h2 className="font-display text-2xl font-medium tracking-tight mb-6">Experience</h2>
                    <div className="space-y-8">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="border-t border-line pt-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <h3 className="font-medium text-lg">{exp.role}</h3>
                                    <span className="text-sm text-muted">{exp.period}</span>
                                </div>
                                <p className="text-muted">{exp.company}</p>
                                <p className="mt-3 leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-14">
                    <h2 className="font-display text-2xl font-medium tracking-tight mb-6">Projects</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {projects.map((proj) => (
                            <div key={proj.id} className="rounded-2xl bg-surface p-5">
                                <p className="text-sm text-muted">{proj.category}</p>
                                <h3 className="font-medium mt-1">{proj.title}</h3>
                                <p className="text-sm text-muted mt-2">{proj.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="font-display text-2xl font-medium tracking-tight mb-6">Education</h2>
                    {education.map((e) => (
                        <div key={e.id} className="border-t border-line py-4 flex flex-col sm:flex-row sm:justify-between gap-1">
                            <span>
                                <span className="block font-medium">{e.school}</span>
                                <span className="block text-muted">{e.degree}</span>
                            </span>
                            <span className="text-sm text-muted">{e.period}</span>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
