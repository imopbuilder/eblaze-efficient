import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import { ABOUT } from '@/constants/about';
import Image from 'next/image';

export function About() {
  return (
    <section className='bg-background relative z-10 py-14'>
      <div className='mx-5'>
        <div className='grid grid-cols-8'>
          <h1 className='uppercase col-span-8'>
            Get to{' '}
            <Image
              src={'/images/ui/app/about-heading.svg'}
              className='inline-block md:w-[9rem] sm:w-[6rem] w-[5rem] h-auto animate-move-ease'
              alt='about'
              width={100}
              height={100}
              loading='lazy'
              unoptimized
            />
          </h1>
          <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>Know Us</h1>
        </div>
        <div>
          {ABOUT.map(({ id, title, description }) => (
            <div key={id} className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
              <div className='md:col-span-2 col-span-8'>
                <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>{title}</Paragraph>
                <Line className='text-primary-color' />
              </div>
              <div className='md:col-span-4 col-span-8'>
                <div>
                  {description.map((val, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <Paragraph key={index} className='sm:text-lg font-medium text-sm' parentClassName='mb-3.5'>
                      {val}
                    </Paragraph>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
