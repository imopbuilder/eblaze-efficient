'use client';

import { useNav } from '@/client/store/use-nav';
import { REGISTRATION_ROUTE } from '@/constants/app';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const variants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  hide: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export function RegisterCard() {
  const open = useNav((state) => state.open);

  return (
    <motion.div
      className='md:inline-block w-max hidden items-center justify-center gap-16 font-semibold fixed top-1/2 text-background bg-primary-color -rotate-90 origin-bottom-right z-20 text-sm right-0'
      variants={variants}
      initial='initial'
      animate={open ? 'hide' : 'show'}
      exit='exit'
    >
      <Link href={REGISTRATION_ROUTE.href} className='flex items-center justify-center gap-16 px-4 py-3'>
        {REGISTRATION_ROUTE.label}
        <span className='flex items-center justify-center gap-3'>
          <Image
            src='/images/ui/app/eblaze-logo.jpg'
            className='size-6 rounded-md inline-block rotate-90'
            width='25'
            height='25'
            alt='Logo'
            loading='lazy'
            unoptimized
          />
          <Image
            src='/images/ui/app/logo.png'
            className='rotate-90 inline-block bg-background rounded-full p-1'
            width='25'
            height='25'
            alt='Logo'
            loading='lazy'
            unoptimized
          />
        </span>
      </Link>
    </motion.div>
  );
}

export function HomeRegisterCard() {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (latest) => setPercentage(Math.floor(latest * 100)));

  return <AnimatePresence mode='wait'>{percentage >= 9 && <RegisterCard />}</AnimatePresence>;
}
