import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socials } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900">
      <div className="container-px py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#home" className="font-display text-2xl font-semibold tracking-tight text-bone-100">
              Fatma<span className="text-accent">.</span>Ahmed
            </a>
            <p className="mt-3 max-w-sm text-sm text-bone-400">
              UI/UX Designer &amp; Frontend Developer crafting simple, intuitive and meaningful digital experiences.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <FooterLink href={socials.behance}>Behance</FooterLink>
            <FooterLink href={socials.linkedin}>LinkedIn</FooterLink>
            <FooterLink href={socials.github}>GitHub</FooterLink>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 text-xs text-bone-500 sm:flex-row">
          <p>© 2026 Fatma Ahmed. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Built with curiosity.
            <span className="h-1 w-1 rounded-full bg-accent" />
          </p>
        </div>
      </div>

      {/* giant background wordmark */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none select-none absolute -bottom-8 left-0 w-full text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-white/[0.025]"
      >
        FATMA
      </motion.div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 text-sm text-bone-300 transition-colors hover:text-white"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
