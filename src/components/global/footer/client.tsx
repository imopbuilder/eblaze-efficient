'use client';

import { useMediaQuery } from '@/client/hooks/use-media-query.hook';
import { useFooter } from '@/client/store/use-footer';
import { cn } from '@/lib/utils/cn';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

export function FooterSection({ className, ...props }: ComponentPropsWithoutRef<'footer'>) {
  const showFooter = useFooter((state) => state.showFooter);

  return (
    <footer
      className={cn('relative z-10 sm:px-5 px-3 sm:pt-5 pt-3 overflow-hidden bg-background', showFooter ? 'z-20' : 'z-10', className)}
      {...props}
    />
  );
}

export function FooterIntro() {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] });
  const transform = useMediaQuery('(min-width: 768px)');
  const y = useTransform(scrollYProgress, [0, 1], ['0%', transform ? '-100%' : '-120%']);

  return (
    <motion.p ref={container} style={{ y }} className='uppercase text-[20vw] font-clash-display font-normal text-center text-background'>
      Eblaze
    </motion.p>
  );
}
