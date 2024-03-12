'use client';

import { cn } from '@/lib/utils/cn';
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from 'framer-motion';
import { ComponentPropsWithoutRef, useRef } from 'react';

interface ParallaxProps extends ComponentPropsWithoutRef<'div'> {
  baseVelocity: number;
}

export function ParallaxText({ className, children, baseVelocity = 100, ...restProps }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -32.5, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -32.5% - this 12.5% is derived from the fact
   * we have four children (100% / 8). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className={cn('overflow-hidden whitespace-nowrap flex flex-nowrap font-cavas-demo text-lg tracking-wide', className)} {...restProps}>
      <motion.div className='flex flex-nowrap whitespace-nowrap' style={{ x }}>
        <span className='block mx-12'>{children}</span>
        <span className='block mx-12'>{children}</span>
        <span className='block mx-12'>{children}</span>
        <span className='block mx-12'>{children}</span>
        <span className='block mx-12'>{children}</span>
        <span className='block mx-12'>{children}</span>
        <span className='block mx-12'>{children}</span>
        <span className='block mx-12'>{children}</span>
      </motion.div>
    </div>
  );
}
