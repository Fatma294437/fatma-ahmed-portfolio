const items = [
  'UI/UX Design',
  'Product Design',
  'Frontend Development',
  'Creative Problem Solving',
];

export default function Marquee() {
  const row = [...items, ...items, ...items, ...items];
  return (
    <section
      aria-label="Disciplines"
      className="relative border-y border-white/[0.05] bg-ink-800 py-6"
    >
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-2xl font-medium tracking-tight text-bone-300/80 sm:text-3xl">
                {item}
              </span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
