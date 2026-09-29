import { experiences } from "@/data/portfolioData";
import SectionHeader from "./SectionHeader";

// Job-description layout: sticky summary card on the left, long-form roles on the right.
export default function ExperienceSection() {
    const companies = new Set(experiences.map((e) => e.company)).size;

    return (
        <section id="experience" className="px-4 sm:px-6 py-16 md:py-24 border-t border-line">
            <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)]">
                <div>
                    <div className="md:sticky md:top-16">
                        <SectionHeader tag="Experience" title="Roles and impact" />
                        <div className="rounded-3xl bg-surface p-6 grid grid-cols-2 gap-6">
                            <div>
                                <div className="font-display text-4xl font-medium">{experiences.length}</div>
                                <div className="text-sm text-muted">Roles</div>
                            </div>
                            <div>
                                <div className="font-display text-4xl font-medium">{companies}</div>
                                <div className="text-sm text-muted">Organisations</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl space-y-12">
                    {experiences.map((e) => (
                        <article key={e.id}>
                            <p className="text-sm text-muted">{e.period}</p>
                            <h3 className="mt-1 font-display text-xl sm:text-2xl font-medium tracking-tight">{e.role}</h3>
                            <p className="font-medium">{e.company}</p>
                            <p className="mt-3 text-muted leading-relaxed">{e.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {e.tech.map((t) => (
                                    <span key={t} className="rounded-full bg-surface px-3 py-1 text-sm">{t}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
