import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/portfolioData";
import SectionHeader from "./SectionHeader";

// Carnegie Mellon gets a featured card; earlier degrees sit underneath it.
export default function EducationSection() {
    const [featured, ...rest] = education;

    return (
        <section id="education" className="px-4 sm:px-6 py-16 md:py-24 border-t border-line">
            <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)]">
                <SectionHeader tag="Education" title="Trained at Carnegie Mellon" />

                <div className="space-y-4 min-w-0">
                    <article className="rounded-3xl bg-card text-card-ink p-6 sm:p-10">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-card-muted">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-card-ink">
                                <GraduationCap className="w-4 h-4" /> {featured.college}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5" /> {featured.location}
                            </span>
                        </div>

                        <h3 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.02]">
                            {featured.school}
                        </h3>
                        <p className="mt-4 text-lg sm:text-xl">{featured.degree}</p>
                        <p className="mt-1 text-card-muted">{featured.period}</p>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-sm text-card-muted mb-5">At CMU</p>
                            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                                {featured.highlights.map((h) => (
                                    <div key={h.label}>
                                        <dt className="flex items-center gap-2 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {h.label}
                                        </dt>
                                        <dd className="mt-1 text-sm text-card-muted leading-relaxed">{h.detail}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </article>

                    {rest.map((e) => (
                        <article key={e.id} className="rounded-3xl bg-surface p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div>
                                <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight">{e.school}</h3>
                                <p className="mt-1 text-muted">{e.degree}</p>
                            </div>
                            <div className="text-sm text-muted sm:text-right shrink-0">
                                <p>{e.period}</p>
                                <p>{e.location}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
