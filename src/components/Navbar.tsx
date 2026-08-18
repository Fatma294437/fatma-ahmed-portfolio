import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-px flex items-center justify-between">
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-bone-100"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-white transition-transform duration-300 group-hover:rotate-12">
              F
            </span>
            <span>
              Fatma<span className="text-accent">.</span>Ahmed
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm text-bone-400 transition-colors hover:text-bone-100"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-600"
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone-200 transition-colors hover:border-accent/50 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-px flex h-full flex-col">
              <div className="flex items-center justify-between py-5">
                <span className="font-display text-lg font-semibold text-bone-100">
                  Fatma<span className="text-accent">.</span>Ahmed
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone-200"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i + 0.1, duration: 0.4 }}
                    className="group flex items-baseline gap-4 border-b border-white/5 py-5 font-display text-4xl font-semibold tracking-tight text-bone-200 transition-colors hover:text-accent"
                  >
                    <span className="font-sans text-xs text-bone-500">
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="pb-10">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-base font-medium text-white"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
