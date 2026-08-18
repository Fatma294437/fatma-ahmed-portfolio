import { motion } from 'framer-motion';
import { stats } from '@/data/portfolio';

export default function Stats() {
  return (
    <section className="relative border-y border-white/[0.05] bg-ink-800 py-20">
      <div className="container-px">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <span className="font-display text-5xl font-semibold tracking-tighter text-bone-100 transition-colors duration-300 group-hover:text-accent sm:text-6xl lg:text-7xl">
                {stat.value}
              </span>
              <span className="mt-3 text-sm text-bone-400">{stat.label}</span>
              <span className="mt-4 h-px w-10 bg-accent/40 transition-all duration-300 group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
