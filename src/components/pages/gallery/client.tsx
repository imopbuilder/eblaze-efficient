'use client';

import { GALLERY } from '@/constants/gallery';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './styles.module.scss';

export function GalleryParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: 'https://utfs.io/f/773cd064-f0c7-4534-b5b4-5eb4c44ef28e-5a920m.jpg',
      scale: scale4,
    },
    {
      src: GALLERY[0].img.src,
      scale: scale5,
    },
    {
      src: GALLERY[1].img.src,
      scale: scale6,
    },
    {
      src: GALLERY[2].img.src,
      scale: scale5,
    },
    {
      src: GALLERY[3].img.src,
      scale: scale6,
    },
    {
      src: GALLERY[4].img.src,
      scale: scale8,
    },
    {
      src: GALLERY[5].img.src,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className='relative sm:mx-5 mx-3 min-h-[300vh]'>
      <div className='sticky overflow-hidden top-0 h-screen'>
        {pictures.map(({ src, scale }, index) => {
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <motion.div key={index} style={{ scale }} className={`w-full h-full absolute top-0 flex items-center justify-center ${styles.el}`}>
              <div className={`relative w-[25vw] h-[25vh] ${styles.imageContainer}`}>
                <Image className='object-cover' src={src} fill alt='image' placeholder='blur' blurDataURL='https://utfs.io' />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
