import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { processSteps } from '@/data/portfolio';

export default function Process() {
  return (
    <section className="relative bg-ink-900 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              How I turn ideas <span className="text-gradient-red">into experiences.</span>
            </>
          }
          className="mb-16"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <ProcessCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-700 p-6 transition-colors duration-300 hover:border-accent/30"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-4xl font-semibold tracking-tighter text-white/[0.08] transition-colors duration-300 group-hover:text-accent/30">
          {step.number}
        </span>
        <span className="h-2 w-2 rounded-full bg-bone-500 transition-colors duration-300 group-hover:bg-accent" />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-bone-100">{step.title}</h3>
      <p className="mt-2 text-sm text-bone-400">{step.description}</p>
      <p className="mt-4 max-h-0 overflow-hidden text-xs leading-relaxed text-bone-500 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
        {step.detail}
      </p>
    </motion.div>
  );
}
