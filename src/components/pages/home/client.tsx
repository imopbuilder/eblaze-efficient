'use client';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export function CountdownSectionClient({ children }: PropsWithChildren) {
  const [top, setTop] = useState(0);
  const countdownSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!countdownSectionRef.current) return;

    setTop(window.innerHeight - countdownSectionRef.current.offsetHeight);
  }, []);

  return (
    <section ref={countdownSectionRef} style={{ top }} className='bg-primary-color text-foreground sticky top-0 z-10 py-14 min-h-dvh'>
      {children}
    </section>
  );
}

export function CountdownClient({ date }: { date: Date }) {
  const EVENT_DATE = new Date(2024, 2, 18, 8, 0, 0); // 2024-03-18
  const [currentDate, setCurrentDate] = useState(date);
  const diffSeconds = Math.round((EVENT_DATE.valueOf() - currentDate.valueOf()) / 1000);

  function getDays() {
    const val = Math.round(diffSeconds / (24 * 60 * 60)) % 365;

    return val;
  }

  function getHours() {
    const val = Math.round(diffSeconds / (60 * 60)) % 24;

    if (val <= 9) return `0${val}`;

    return val;
  }

  function getMinutes() {
    const val = Math.round(diffSeconds / 60) % 60;

    if (val <= 9) return `0${val}`;

    return val;
  }

  function getSeconds() {
    const val = diffSeconds % 60;
    if (val <= 9) return `0${val}`;

    return val;
  }

  useEffect(() => {
    if (diffSeconds < 0) return;
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    });

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [diffSeconds]);

  if (diffSeconds < 0) {
    return (
      <div className='inline-block'>
        <p className='font-clash-display tabular-nums font-medium'>0 Days, 0 Hours, 0 Minutes, 0 Seconds</p>
      </div>
    );
  }

  return (
    <div className='inline-block'>
      <p className='font-clash-display tabular-nums font-medium'>
        <span>{getDays()}</span> Days, <span>{getHours()}</span> Hours, <span>{getMinutes()}</span> Minutes,{' '}
        <span className=''>{getSeconds()} Seconds</span>
      </p>
    </div>
  );
}
