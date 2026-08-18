import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowUpRight, MousePointer2 } from 'lucide-react';
import Button from '@/components/Button';
import { socials } from '@/data/portfolio';

const socialLinks = [
  { label: 'Behance', href: socials.behance },
  { label: 'LinkedIn', href: socials.linkedin },
  { label: 'GitHub', href: socials.github },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 noise"
    >
      {/* background grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="absolute -right-40 top-1/4 h-[40rem] w-[40rem] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent-800/10 blur-[120px]"
        aria-hidden
      />

      <motion.div style={{ y, opacity }} className="container-px relative z-10 pt-28 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow eyebrow-dot"
            >
              UI/UX Designer · Frontend Developer
            </motion.span>

            <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tightest text-bone-100 sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              <RevealLine delay={0.1}>Designing digital</RevealLine>
              <RevealLine delay={0.18}>
                experiences that{' '}
                <span className="relative whitespace-nowrap text-accent">
                  people
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    aria-hidden
                  >
                    <motion.path
                      d="M2 9C40 3 160 3 198 9"
                      stroke="#FF2E2E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                    />
                  </svg>
                </span>{' '}
                enjoy
              </RevealLine>
              <RevealLine delay={0.26}>using.</RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-base leading-relaxed text-bone-400 sm:text-lg"
            >
              I&apos;m Fatma Ahmed, a UI/UX Designer and Frontend Developer focused on creating
              clean, intuitive and engaging digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#work" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Let&apos;s Talk
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex items-center gap-5"
            >
              <span className="text-xs uppercase tracking-widest text-bone-500">Follow</span>
              <span className="h-px w-8 bg-white/10" />
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-bone-300 transition-colors hover:text-accent"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: abstract UI visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-bone-500">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MousePointer2 className="h-4 w-4 rotate-90 text-accent" />
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}

function RevealLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

const heroPortraitSrc = '/images/fatma-ahmed.png';

function HeroVisual() {
  return (
    <div className="relative flex h-[34rem] w-full items-center justify-center perspective">
      {/* large circular portrait */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-[26rem] w-[26rem]"
      >
        <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 shadow-2xl">
          <img
            src={heroPortraitSrc}
            alt="Fatma Ahmed — UI/UX Designer & Frontend Developer"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </motion.div>

      {/* floating chip bottom left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 left-2 rotate-[-8deg]"
      >
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2.5">
          <span className="h-2 w-2 animate-pulse-soft rounded-full bg-accent" />
          <span className="text-xs text-bone-300">Designing now</span>
        </div>
      </motion.div>

      {/* decorative ring */}
      <div className="absolute right-6 bottom-8 h-28 w-28 rounded-full border border-dashed border-white/10 animate-spin-slow" />
    </div>
  );
}
