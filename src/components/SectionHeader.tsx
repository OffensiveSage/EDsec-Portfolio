export default function SectionHeader({ tag, title }: { tag: string; title: string }) {
    return (
        <div className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-tag text-tag-ink px-3 py-1.5 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {tag}
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium tracking-tight">{title}</h2>
        </div>
    );
}
