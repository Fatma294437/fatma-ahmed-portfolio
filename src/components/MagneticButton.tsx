import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  as = 'button',
  href,
  onClick,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const commonProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className,
    'aria-label': ariaLabel,
  };

  if (as === 'a') {
    return (
      <motion.a
        href={href}
        {...commonProps}
        style={{ x: sx, y: sy }}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...commonProps} style={{ x: sx, y: sy }}>
      {children}
    </motion.button>
  );
}
