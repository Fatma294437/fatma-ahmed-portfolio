import { motion } from 'framer-motion';
import { GraduationCap, Compass } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Timeline, { type TimelineItem } from '@/components/Timeline';

const education: TimelineItem[] = [
  {
    title: 'Egyptian E-Learning University',
    meta: 'Computer Science',
    period: '2023 — Present',
    description:
      'Studying Computer Science, building a strong foundation in software, systems and problem solving that supports my design and frontend work.',
  },
];

const focus: TimelineItem[] = [
  {
    title: 'UI/UX Design',
    meta: 'Core discipline',
    period: 'Ongoing',
    description: 'User research, wireframing, prototyping and high-fidelity interface design.',
  },
  {
    title: 'Frontend Development',
    meta: 'Core discipline',
    period: 'Ongoing',
    description: 'Turning designs into responsive, accessible interfaces with modern tooling.',
  },
  {
    title: 'Graphic Design',
    meta: 'Extended skill',
    period: 'Ongoing',
    description: 'Visual identity, layout and communication design across digital and print.',
  },
];

export default function Experience() {
  return (
    <section className="relative bg-ink-900 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Experience & Education"
          title={
            <>
              Learning, building, <span className="text-gradient-red">growing.</span>
            </>
          }
          className="mb-16"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-700">
                <GraduationCap className="h-5 w-5 text-accent" />
              </span>
              <h3 className="font-display text-xl font-semibold text-bone-100">Education</h3>
            </div>
            <Timeline items={education} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-700">
                <Compass className="h-5 w-5 text-accent" />
              </span>
              <h3 className="font-display text-xl font-semibold text-bone-100">Focus Areas</h3>
            </div>
            <Timeline items={focus} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
