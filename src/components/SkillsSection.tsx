import { skills } from "@/data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function SkillsSection() {
    return (
        <section id="skills" className="px-4 sm:px-6 py-16 md:py-24 border-t border-line">
            <SectionHeader tag="Toolkit" title="What I work with" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((group) => (
                    <div key={group.category} className="rounded-3xl bg-surface p-6">
                        <h3 className="font-medium mb-4">{group.category}</h3>
                        <ul className="space-y-2 text-muted">
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
