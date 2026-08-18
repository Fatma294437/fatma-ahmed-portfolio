import { motion } from 'framer-motion';

type SkillCardProps = {
  label: string;
  index: number;
  variant?: 'default' | 'accent';
};

export default function SkillCard({ label, index, variant = 'default' }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 6) * 0.05 }}
      whileHover={{ y: -4 }}
      className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl border px-5 py-4 transition-colors duration-300 ${
        variant === 'accent'
          ? 'border-accent/30 bg-accent/[0.06] hover:border-accent/50'
          : 'border-white/[0.06] bg-ink-700 hover:border-white/15'
      }`}
    >
      <span className="text-sm font-medium text-bone-200 transition-colors group-hover:text-white">
        {label}
      </span>
      <span
        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
          variant === 'accent' ? 'bg-accent' : 'bg-bone-500 group-hover:bg-accent'
        }`}
      />
      <span
        className={`pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 ${
          variant === 'accent' ? 'bg-accent/30' : 'bg-accent/0 group-hover:bg-accent/20'
        }`}
      />
    </motion.div>
  );
}
