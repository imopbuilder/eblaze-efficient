'use client';

import Image from 'next/image';
import { CSSProperties, useEffect, useState } from 'react';
import './styles.scss';

const LOGOS = [
  {
    src: '/images/ui/app/logo.png',
    alt: 'logo',
  },
  {
    src: '/images/ui/app/logo.png',
    alt: 'logo',
  },
  {
    src: '/images/ui/app/logo.png',
    alt: 'logo',
  },
  {
    src: '/images/ui/app/logo.png',
    alt: 'logo',
  },
];

const BLURS = 8;
export function Collaborators() {
  const [timestamp, setTimestamp] = useState(Date.now());
  const { speed, items, scale, blurring, blurSeed, outline } = {
    speed: 20,
    blurring: true,
    blurSeed: 1,
    outline: false,
    scale: 1,
    items: LOGOS.length,
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTimestamp(Date.now());
  }, [items]);

  // const renderStamp = Date.now()
  return (
    <div className='collaborator-logos py-5 bg-muted rounded-xl'>
      <div
        className='resizable w-full overflow-hidden scale-[var(--scale)] min-h-[100px] min-w-[300px] mx-auto max-w-[calc(100%_-_2rem)]'
        data-translate='items'
        data-direction='horizontal'
        data-blurring={blurring}
        data-outline={outline}
        data-play-state={'running'}
        style={
          {
            '--speed': speed,
            '--count': items,
            '--scale': scale,
            '--blur': blurSeed,
            '--blurs': BLURS,
          } as CSSProperties
        }
      >
        <div className='container w-full grid min-h-[100px] min-w-[300px]'>
          <div className='blur absolute top-0 bottom-0 w-1/4 z-[2] pointer-events-none opacity-0 left-0 rotate-180'>
            {new Array(BLURS).fill(undefined).map((_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} style={{ '--index': index } as CSSProperties} />
            ))}
          </div>
          <ul className='flex gap-4 h-full w-fit items-center pointer-events-none p-0 list-none'>
            {LOGOS.map((val, index) => {
              return (
                <li
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={`index-${timestamp}--${index}`}
                  style={{ '--index': index } as CSSProperties}
                  className='grid place-items-center h-full aspect-video'
                >
                  <Image src={val.src} alt={val.alt} width={100} height={100} loading='lazy' unoptimized />
                </li>
              );
            })}
          </ul>
          <div className='blur absolute top-0 bottom-0 w-1/4 z-[2] pointer-events-none opacity-0 right-0'>
            {new Array(BLURS).fill(undefined).map((_, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                style={
                  {
                    '--index': index + 1,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
