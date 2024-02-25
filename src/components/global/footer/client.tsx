'use client';

import { useMediaQuery } from '@/client/hooks/use-media-query.hook';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function FooterIntro() {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] });
  const transform = useMediaQuery('(min-width: 768px)');
  const y = useTransform(scrollYProgress, [0, 1], ['0%', transform ? '-100%' : '-120%']);

  return (
    <motion.p ref={container} style={{ y }} className='uppercase text-[20vw] font-light text-center text-background'>
      Eblaze
    </motion.p>
  );
}
