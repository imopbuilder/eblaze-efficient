import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';

import { EVENTS, Event } from '@/constants/events';
import Image from 'next/image';
import { ResponsiveEventGuidelines } from './client';

export function Events() {
  return (
    <section className='bg-primary-color relative z-10'>
      <div className='px-5 py-14 bg-background' vaul-drawer-wrapper=''>
        <div className='grid grid-cols-8'>
          <h1 className='uppercase col-span-8'>
            Unified{' '}
            <Image
              src={'/images/ui/app/event-heading.svg'}
              className='inline-block md:w-[9rem] sm:w-[6rem] w-[4rem] h-auto relative sm:-top-2 top-0 animate-move-ease'
              alt='about'
              width={100}
              height={100}
              loading='lazy'
              unoptimized
            />
          </h1>
          <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>Meetups</h1>
        </div>
        <div>
          {EVENTS.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard(event: Event) {
  const { title, description, image } = event;

  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3 grid-row'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>{title}</Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <div className='sm:pt-0 pt-3'>
            {description.map((val, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Paragraph key={index} className='sm:text-lg font-medium text-sm has-[span]:mb-1'>
                {val}
              </Paragraph>
            ))}
          </div>
        </div>
        <div className='row-start-2 md:col-span-2 col-span-8'>
          <Paragraph>
            <Image
              src={`/images/ui/events/${image.src}`}
              className='w-full h-auto'
              width={100}
              height={100}
              alt={image.alt}
              loading='lazy'
              unoptimized
            />
          </Paragraph>
        </div>
        <div className='sm:col-start-3 col-start-1 sm:col-span-4 col-span-8'>
          <ResponsiveEventGuidelines {...event} />
        </div>
      </div>
    </div>
  );
}
