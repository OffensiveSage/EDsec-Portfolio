import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { articles, profile } from "@/data/portfolioData";

export default function Hero() {
    const latest = articles[0];
    const initials = profile.name.split(" ").map((w) => w[0]).join("");

    return (
        <section id="top" className="pt-16 sm:pt-20 px-4 sm:px-6">
            <div className="grid gap-4 md:grid-cols-[minmax(0,5fr)_minmax(0,9fr)] md:min-h-[520px]">
                {/* Identity card */}
                <div className="rounded-3xl bg-card text-card-ink p-6 sm:p-8 flex flex-col justify-between gap-10">
                    <div>
                        <h1 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-tight">
                            {profile.name}
                        </h1>
                        <p className="mt-3 text-card-muted text-lg">{profile.title}</p>
                        <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            Open to security roles
                        </span>
                    </div>

                    <dl className="space-y-4 text-sm">
                        {profile.meta.map((m) => (
                            <div key={m.label}>
                                <dt className="font-medium">{m.label}</dt>
                                <dd className="text-card-muted">{m.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Photo panel */}
                <div className="relative rounded-3xl overflow-hidden bg-surface aspect-[4/5] sm:aspect-[4/3] md:aspect-auto">
                    {profile.photo ? (
                        <Image
                            src={profile.photo}
                            alt={profile.name}
                            fill
                            priority
                            sizes="(min-width: 768px) 60vw, 100vw"
                            className="object-cover"
                            style={{ objectPosition: profile.photoFocus }}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-display text-[28vw] md:text-[16vw] font-semibold leading-none tracking-tighter text-line select-none">
                                {initials}
                            </span>
                        </div>
                    )}

                    {latest && (
                        <a
                            href={latest.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 md:bottom-auto md:top-4 right-4 left-4 md:left-auto md:max-w-sm flex items-center gap-3 rounded-2xl bg-bg/95 backdrop-blur p-3 pr-4 shadow-lg hover:shadow-xl transition"
                        >
                            <span className="w-12 h-12 shrink-0 rounded-full bg-card text-card-ink flex items-center justify-center font-display font-medium">
                                {latest.platform[0]}
                            </span>
                            <span className="min-w-0">
                                <span className="block text-xs text-muted">Latest writing</span>
                                <span className="block font-medium truncate">{latest.title}</span>
                            </span>
                            <ArrowUpRight className="w-4 h-4 shrink-0 ml-auto" />
                        </a>
                    )}
                </div>
            </div>

            {/* Lead statement */}
            <p className="font-display font-medium tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.12] max-w-5xl mt-20 md:mt-28 mb-8">
                {profile.lead}
            </p>
        </section>
    );
}
