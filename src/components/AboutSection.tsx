import { certifications, profile } from "@/data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
    return (
        <section id="about" className="px-4 sm:px-6 py-16 md:py-24 border-t border-line">
            <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)]">
                <SectionHeader tag="About" title="In my own words" />

                <div className="max-w-2xl space-y-10">
                    {profile.about.map((item) => (
                        <div key={item.q}>
                            <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight mb-3">{item.q}</h3>
                            <p className="text-muted text-lg leading-relaxed">{item.a}</p>
                        </div>
                    ))}

                    <div>
                        <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight mb-4">Certifications</h3>
                        <div className="flex flex-wrap gap-2">
                            {certifications.map((c) => (
                                <span key={c} className="rounded-full border border-line px-3 py-1.5 text-sm">{c}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
