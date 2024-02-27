'use client';

import { useMediaQuery } from '@/client/hooks/use-media-query.hook';
import { useLayoutEffect, useRef } from 'react';

export default function StickyCursor() {
  const isDesktop = useMediaQuery('(min-width: 640px)');

  if (isDesktop) return <DesktopStickyCursor />;

  return null;
}

function DesktopStickyCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!cursor.current) return;

      const x = e.clientX - 54;
      const y = e.clientY - cursor.current.offsetHeight / 2;

      const keyframes = {
        translate: `${x}px ${y}px`,
      };

      cursor.current.animate(keyframes, {
        duration: 800,
        fill: 'forwards',
      });
    }
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursor}
      id='cursor_ring'
      className='fixed left-0 top-0 size-24 border rounded-full pointer-events-none z-[9998] mix-blend-difference sm:inline-flex items-center justify-center hidden'
    >
      <span
        id='cursor'
        className='inline-block group-has-[a:hover]/body:scale-[3] group-has-[button:hover]/body:scale-[3] scale-100 duration-500 transition-transform size-4 bg-background rounded-full pointer-events-none z-[9999] mix-blend-difference'
      />
    </div>
  );
}
