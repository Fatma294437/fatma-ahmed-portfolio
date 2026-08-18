import { motion } from 'framer-motion';
import { Sparkles, Layers, Code2, Palette } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const disciplines = [
  { icon: Palette, label: 'UI/UX Design' },
  { icon: Layers, label: 'Product Design' },
  { icon: Sparkles, label: 'Web Design' },
  { icon: Layers, label: 'Mobile App Design' },
  { icon: Code2, label: 'Frontend Development' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-[120px]"
        aria-hidden
      />
      <div className="container-px">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  Designing with purpose,{' '}
                  <span className="text-gradient-red">building with curiosity.</span>
                </>
              }
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-bone-400 sm:text-lg"
            >
              <p>
                I&apos;m Fatma Ahmed, a UI/UX Designer and Frontend Developer with a passion for
                turning ideas into clear, engaging digital experiences.
              </p>
              <p>
                My design approach combines visual thinking, usability and attention to detail. I
                enjoy understanding problems, exploring ideas, creating interfaces and transforming
                them into experiences that feel simple and natural to use.
              </p>
              <p>
                I work across UI/UX Design, Product Design, Web Design, Mobile App Design and
                Frontend Development — bridging the gap between how a product looks and how it works.
              </p>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <AboutVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const portraitSrc = '/images/fatma-ahmed.png';

function AboutVisual() {
  return (
    <div className="relative flex h-full min-h-[24rem] flex-col justify-center gap-4">
      {/* portrait */}
      <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-ink-700">
        {/* placeholder shown when no photo (bottom layer) */}
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-ink-800 font-display text-3xl font-semibold text-accent">
            FA
          </div>
          <p className="text-xs uppercase tracking-widest text-bone-500">
            Replace with photo
          </p>
        </div>
        {/* real photo on top — hides placeholder when loaded */}
        <img
          src={portraitSrc}
          alt="Fatma Ahmed — UI/UX Designer & Frontend Developer"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent to-accent-800" />
      </div>

      {/* discipline chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {disciplines.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-700 px-3 py-1.5 text-xs text-bone-300"
          >
            <Icon className="h-3 w-3 text-accent" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
