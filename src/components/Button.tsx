import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900';

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-sm sm:text-base',
};

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-600 shadow-[0_8px_30px_-8px_rgba(255,46,46,0.55)]',
  outline:
    'border border-white/15 text-bone-200 hover:border-accent/60 hover:text-white bg-white/0 hover:bg-white/[0.03]',
  ghost: 'text-bone-300 hover:text-white',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  return (
    <MagneticButton
      as={href ? 'a' : 'button'}
      href={href}
      onClick={onClick}
      ariaLabel={ariaLabel}
      strength={0.25}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {content}
    </MagneticButton>
  );
}

export function AnimatedLink({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2 }}
      className={`group relative inline-flex items-center gap-1 text-bone-300 transition-colors hover:text-white ${className}`}
    >
      {children}
    </motion.a>
  );
}
