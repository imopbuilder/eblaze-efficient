'use client';

import { cn } from '@/lib/utils/cn';
import { Variants, motion, useInView } from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

const anim: Variants = {
  initial: { y: '100%' },
  enter: (i) => ({ y: '0', transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }),
};

interface ParagraphProps extends ComponentPropsWithoutRef<typeof motion.p> {
  parentClassName?: string;
}

export default function Paragraph({ className, children, parentClassName, ...props }: ParagraphProps) {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, { once: true, amount: 0.75 });

  return (
    <div ref={container} className={cn('overflow-hidden mb-3.5', parentClassName)}>
      <motion.p variants={anim} initial='initial' animate={inView ? 'enter' : ''} className={cn('text-foreground text-sm', className)} {...props}>
        {children}
      </motion.p>
    </div>
  );
}
