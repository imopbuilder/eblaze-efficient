'use client';

import { useNav } from '@/client/store/use-nav';
import { APP_LINKS, REGISTRATION_ROUTE } from '@/constants/app';
import { CONTACT } from '@/constants/contact';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, MouseEvent, useState } from 'react';
import { background, blur, height, opacity, translate } from './variants';

export function AppProgress() {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (latest) => setPercentage(Math.floor(latest * 100)));

  return (
    <motion.p className='text-sm font-medium' variants={opacity} initial='initial' animate={percentage < 9 ? 'closed' : 'open'}>
      {percentage}%
    </motion.p>
  );
}

export function NavMenuBtn() {
  const open = useNav((state) => state.open);
  const setOpen = useNav((state) => state.setOpen);

  return (
    <button type='button' className='flex items-center justify-center' onClick={() => setOpen()}>
      <div className='flex items-center justify-center relative font-medium uppercase text-sm'>
        <motion.p variants={opacity} animate={!open ? 'open' : 'closed'}>
          Menu
        </motion.p>
        <motion.p className='absolute' initial='closed' variants={opacity} animate={open ? 'open' : 'closed'}>
          Close
        </motion.p>
      </div>
    </button>
  );
}

export function NavHelperBackgrounds() {
  const open = useNav((state) => state.open);

  return (
    <Fragment>
      <motion.div
        variants={background}
        initial='initial'
        animate={open ? 'open' : 'closed'}
        className='bg-background opacity-70 h-full w-full absolute left-0 top-full px-5'
      />
      <AnimatePresence mode='wait'>{open && <Nav />}</AnimatePresence>
    </Fragment>
  );
}

function Nav() {
  return (
    <motion.div variants={height} initial='initial' animate='enter' exit='exit' className='overflow-hidden px-5'>
      <div className='flex lg:mb-0 mb-20 gap-[50px]'>
        <div className='flex flex-col justify-between'>
          <NavBody />
          <NavFooter />
        </div>
        <NavImage />
      </div>
    </motion.div>
  );
}

function NavBody() {
  const selectedLink = useNav((state) => state.selectedLink);
  const updateSelectedLink = useNav((state) => state.updateSelectedLink);
  const setOpen = useNav((state) => state.setOpen);
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>, index: number, href: string) {
    e.preventDefault();
    setOpen();
    updateSelectedLink({ isActive: false, index });
    setTimeout(() => {
      router.push(href);
    }, 1000);
  }

  return (
    <div className='flex flex-wrap mt-10 lg:mt-20 lg:max-w '>
      {[...APP_LINKS, REGISTRATION_ROUTE].map(({ id, label, href }, index) => {
        return (
          <Link key={id} href={href} onClick={(e) => handleClick(e, index, href)}>
            <motion.p
              className='text-[32px] lg:text-[5vw] flex overflow-hidden pr-[30px] lg:pr-[2vw] pt-[10px] m-0'
              onMouseOver={() => {
                updateSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                updateSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={selectedLink.isActive && selectedLink.index !== index ? 'open' : 'closed'}
            >
              {label.split('').map((char, i) => (
                <motion.span
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={i}
                  custom={[i * 0.02, (label.length - i) * 0.01]}
                  variants={translate}
                  initial='initial'
                  animate='enter'
                  exit='exit'
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}

function NavFooter() {
  return (
    <div className='flex flex-end flex-wrap lg:justify-between sm:text-lg text-sm mt-10 pb-5 sm:px-2 font-medium'>
      <ul className='mt-2.5 overflow-hidden p-0 flex sm:flex-row flex-col sm:items-center items-start justify-start gap-10'>
        {CONTACT.map(({ id, href, social, label }) => (
          <motion.li key={id} custom={[0.3, 0]} variants={translate} initial='initial' animate='enter' exit='exit'>
            <Link href={href} target='_blank' rel='noreferrer'>
              {social}: {label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function NavImage() {
  const selectedLink = useNav((state) => state.selectedLink);
  const src = [...APP_LINKS, REGISTRATION_ROUTE][selectedLink.index].src;

  return (
    <motion.div
      variants={opacity}
      initial='initial'
      animate={selectedLink.isActive ? 'open' : 'closed'}
      className='lg:block hidden w-[500px] h-full relative bg-background rounded-md'
    >
      <Image src={`/images/ui/app/${src}`} className='w-full animate-move-ease' width={100} height={100} alt='image' loading='lazy' unoptimized />
    </motion.div>
  );
}
