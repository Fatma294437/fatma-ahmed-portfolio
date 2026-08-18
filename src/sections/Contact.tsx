import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { socials } from '@/data/portfolio';
import Button from '@/components/Button';

const contactItems = [
  { label: 'Email', value: socials.email, href: `mailto:${socials.email}` },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: socials.linkedin },
  { label: 'Behance', value: 'View my portfolio', href: socials.behance },
  { label: 'GitHub', value: 'See my code', href: socials.github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div
        className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent/8 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-800/10 blur-[140px]"
        aria-hidden
      />
      <div className="container-px">
        <div className="flex flex-col items-center gap-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow eyebrow-dot"
          >
            Contact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-display text-4xl font-semibold leading-[1.04] tracking-tightest text-bone-100 sm:text-6xl lg:text-7xl"
          >
            Have an idea? Let&apos;s build{' '}
            <span className="text-gradient-red">something great.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-bone-400 sm:text-lg"
          >
            I&apos;m always open to interesting projects, collaborations and new opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-2"
          >
            <Button href={`mailto:${socials.email}`} size="lg" icon={<ArrowUpRight className="h-4 w-4" />}>
              Let&apos;s Work Together
            </Button>
          </motion.div>

          {/* contact grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-12 grid w-full max-w-4xl gap-4 sm:grid-cols-2"
          >
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-ink-700 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-800">
                    <Mail className="h-5 w-5 text-accent" />
                  </span>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest text-bone-500">{item.label}</p>
                    <p className="mt-1 text-sm font-medium text-bone-200">{item.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-bone-500 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </motion.div>

          <p className="mt-4 text-xs uppercase tracking-widest text-bone-500">
            Available for freelance & full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
