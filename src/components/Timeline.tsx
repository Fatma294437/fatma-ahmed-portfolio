import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

export type TimelineItem = {
  title: string;
  meta: string;
  period: string;
  description?: string;
  tags?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative flex flex-col">
      {/* vertical line */}
      <span className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
          className="group relative pl-10 pb-10 last:pb-0"
        >
          <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-ink-900 transition-colors duration-300 group-hover:border-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-bone-500 transition-colors duration-300 group-hover:bg-accent" />
          </span>
          <TimelineCard item={item} />
        </motion.div>
      ))}
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-ink-700/60 p-5 transition-colors duration-300 hover:border-white/15 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-display text-lg font-semibold text-bone-100">{item.title}</h4>
        <span className="text-xs uppercase tracking-widest text-accent">{item.period}</span>
      </div>
      <p className="mt-1 text-sm text-bone-400">{item.meta}</p>
      {item.description && <p className="mt-3 text-sm leading-relaxed text-bone-400">{item.description}</p>}
      {item.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-bone-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function ExperienceBlock({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-6">{children}</div>;
}
