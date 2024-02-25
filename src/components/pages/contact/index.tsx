import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import Arrow from '@/components/global/icons/arrow';
import { CONTACT } from '@/constants/contact';
import Image from 'next/image';
import Link from 'next/link';

export function Contact() {
  return (
    <section className='bg-background sticky top-0 z-10 py-14 min-h-screen'>
      <div className='mx-5'>
        <div>
          <h1 className='uppercase md:text-[7rem] sm:text-[5rem] text-[4rem]'>
            Get in{' '}
            <Image
              src={'/images/ui/contact/contact-heading.png'}
              className='inline-block md:w-[9rem] sm:w-[6rem] w-[4rem] h-auto  relative -top-2'
              alt='about'
              width={100}
              height={100}
              loading='lazy'
              unoptimized
            />
          </h1>
          <div className='flex items-end justify-between'>
            <Link href={'/'} className='flex items-end justify-start h-full relative md:-top-9 sm:-top-7 -top-5'>
              <Arrow className='text-primary-color sm:size-10 size-6' />
            </Link>
            <h1 className='uppercase md:text-[7rem] sm:text-[5rem] text-[3.3rem]'>Touch</h1>
          </div>
        </div>
        <div>
          {CONTACT.map(({ id, label, href }) => (
            <div key={id}>
              <Link href={href} className='group text-lg mt-14 h-9 inline-flex items-center justify-start gap-3' target='_blank' rel='noreferrer'>
                <Paragraph className='text-lg font-medium'>{label}</Paragraph>
                <span className='bg-foreground inline-flex items-center justify-center text-background rounded-full size-5 overflow-hidden group-hover:size-16 duration-300'>
                  <Arrow className='-translate-x-10 translate-y-10 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 size-4' />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className='bg-background relative z-10 py-14 min-h-screen'>
      <div className='mx-5'>
        <div className='grid grid-cols-8'>
          <h1 className='uppercase col-span-8'>
            Join our{' '}
            <Image
              src={'/images/ui/location/location-heading.png'}
              className='inline-block md:w-[9rem] sm:w-[6rem] w-[3.7rem] h-auto relative -top-2'
              alt='about'
              width={100}
              height={100}
              loading='lazy'
              unoptimized
            />
          </h1>
          <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>Space</h1>
        </div>
        <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3 md:grid-rows-3'>
          {/* Venue */}
          <div className='md:col-span-2 col-span-8'>
            <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>Venue</Paragraph>
            <Line className='text-primary-color' />
          </div>
          <div className='md:col-span-4 col-span-8'>
            <div>
              <Paragraph className='mb-3.5 sm:text-lg font-medium text-sm'>
                <Link
                  href={'/'}
                  type='button'
                  className='group bg-off-black w-full flex items-end justify-between rounded-lg overflow-hidden text-background p-5 isolate relative before:absolute before:bg-primary-color before:inset-0 before:-translate-y-full hover:before:-translate-y-0 before:duration-300'
                >
                  <span className='relative z-20'>
                    Explore
                    <br />
                    The Location
                  </span>
                  <ArrowLink />
                </Link>
              </Paragraph>
            </div>
          </div>

          {/* Register */}
          <div className='md:col-span-2 col-span-8 md:row-start-2 row-start-3'>
            <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>Register</Paragraph>
            <Line className='text-primary-color' />
          </div>
          <div className='md:col-span-4 col-span-8'>
            <div>
              <Paragraph className='mb-3.5 sm:text-lg font-medium text-sm'>
                <Link
                  href={'/'}
                  type='button'
                  className='group bg-off-black w-full flex items-end justify-between rounded-lg overflow-hidden text-background p-5 isolate relative before:absolute before:bg-primary-color before:inset-0 before:-translate-y-full hover:before:-translate-y-0 before:duration-300'
                >
                  <span className='relative z-20'>
                    Join
                    <br />
                    Our Workshop
                  </span>
                  <ArrowLink />
                </Link>
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowLink() {
  return (
    <span className='inline-block relative ml-1 lg:size-9 sm:size-7 size-6 overflow-hidden'>
      <span className='inline-block absolute transition-all duration-200 lg:group-hover:-translate-y-9 sm:group-hover:-translate-y-8 group-hover:-translate-y-6 lg:group-hover:translate-x-9 sm:group-hover:translate-x-7 group-hover:translate-x-6'>
        <Arrow className='lg:size-9 sm:size-7 size-6' />
        <Arrow className=' lg:size-9 sm:size-7 size-6 lg:-translate-x-9 sm:-translate-x-7 -translate-x-6' />
      </span>
    </span>
  );
}
