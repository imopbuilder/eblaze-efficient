import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import Arrow from '@/components/global/icons/arrow';
import { REGISTRATION_ROUTE } from '@/constants/app';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className='bg-primary-color text-background sticky top-[56px]'>
      <div className='mx-5 min-h-[120vh]'>
        <div className='py-24'>
          <div className='min-h-rvh'>
            <Paragraph className='text-sm sm:text-lg font-semibold text-background sm:pb-0 pb-4'>Spark Your Passion</Paragraph>
            <Paragraph className='text-background xl:text-[7rem] lg:text-[6rem] md:text-[5rem] font-light text-[3.5rem] mb-8'>
              Join Our{' '}
              <Image
                src={'/images/ui/app/hero-section.png'}
                className='rounded-md inline-block relative -top-2 md:w-[100px] w-[80px] h-auto'
                width={100}
                height={100}
                alt='hero-rocket'
                loading='lazy'
                unoptimized
              />{' '}
              Electrifying Lineup of Events{' '}
              <Image
                src={'/images/ui/app/hero-section-2.png'}
                className='rounded-md inline-block relative -top-2 md:w-[100px] w-[80px] h-auto'
                width={100}
                height={100}
                alt='hero-rocket'
                loading='lazy'
                unoptimized
              />{' '}
              and Gatherings
            </Paragraph>
            <Line className='text-background stroke-2' />
            <Link href={REGISTRATION_ROUTE.href} className='group inline-flex w-full py-5 px-3 items-center justify-between relative z-50'>
              <span>
                <Paragraph className='text-background font-bold text-lg flex items-center justify-start gap-1'>
                  {REGISTRATION_ROUTE.label} to Eblaze{' '}
                  <Image
                    src='/images/ui/app/logo.png'
                    className='bg-background inline-block rounded-full p-1 size-8 ml-1'
                    width='25'
                    height='25'
                    alt='Logo'
                    loading='lazy'
                    unoptimized
                  />{' '}
                </Paragraph>
              </span>
              <ArrowLink />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowLink() {
  return (
    <div className='relative ml-1 lg:size-9 sm:size-7 size-6 overflow-hidden'>
      <div className='absolute transition-all duration-200 lg:group-hover:-translate-y-9 sm:group-hover:-translate-y-8 group-hover:-translate-y-6 lg:group-hover:translate-x-9 sm:group-hover:translate-x-7 group-hover:translate-x-6'>
        <Arrow className='lg:size-9 sm:size-7 size-6' />
        <Arrow className=' lg:size-9 sm:size-7 size-6 lg:-translate-x-9 sm:-translate-x-7 -translate-x-6' />
      </div>
    </div>
  );
}
