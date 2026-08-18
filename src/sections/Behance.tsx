import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socials } from '@/data/portfolio';
import Button from '@/components/Button';

export default function Behance() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-ink-800 py-24 sm:py-32">
      <div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />
      <div className="container-px">
        <div className="flex flex-col items-center gap-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow eyebrow-dot"
          >
            More Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-bone-100 sm:text-5xl lg:text-6xl"
          >
            More work, more <span className="text-gradient-red">experiments.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-bone-400 sm:text-lg"
          >
            Explore more of my design work, case studies and creative experiments on Behance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-2 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href={socials.behance} size="lg" icon={<ArrowUpRight className="h-4 w-4" />}>
              Visit My Behance
            </Button>
            <Button href={socials.linkedin} variant="outline" size="lg">
              LinkedIn
            </Button>
            <Button href={socials.github} variant="outline" size="lg">
              GitHub
            </Button>
          </motion.div>

          <p className="mt-4 text-xs uppercase tracking-widest text-bone-500">
            Replace [BEHANCE_PROFILE_LINK] with your Behance URL
          </p>
        </div>
      </div>
    </section>
  );
}
