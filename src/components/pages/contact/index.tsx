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
          <h1 className='uppercase md:text-[7rem] sm:text-[5rem] text-[3.3rem]'>
            Reach Out{' '}
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
            <h1 className='uppercase md:text-[7rem] sm:text-[5rem] text-[3.3rem]'>To Connect</h1>
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
