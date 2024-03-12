import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';

import { EVENTS, EVENT_SCHEDULE, Event } from '@/constants/events';
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
      <div className='grid grid-cols-8 pt-12 md:gap-6 gap-y-3 grid-row'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>{title}</Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <div className='sm:pt-0 pt-3'>
            {description.map((val, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Paragraph key={index} className='sm:text-lg font-medium text-sm' parentClassName='mb-3.5 has-[span]:mb-1'>
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

export function EventSchedule() {
  return (
    <section className='bg-primary-color relative z-10'>
      <div className='px-5 py-14 bg-background' vaul-drawer-wrapper=''>
        <div className='grid grid-cols-8'>
          <h1 className='uppercase col-span-8'>
            Event{' '}
            <Image
              src={'/images/ui/app/event-schedule-heading.svg'}
              className='inline-block md:w-[9rem] sm:w-[6rem] w-[4rem] h-auto relative sm:-top-2 top-0 animate-move-ease'
              alt='about'
              width={100}
              height={100}
              loading='lazy'
              unoptimized
            />
          </h1>
          <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>Schedule</h1>
        </div>
        <div>
          <div className='grid grid-cols-8 pt-12 md:gap-6 gap-y-3 grid-row'>
            <div className='md:col-span-2 col-span-8'>
              <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>
                March 18th, 2024 <span className='text-[8px] inline-block px-4 relative -top-0.5'>●</span>Day 1
              </Paragraph>
              <Line className='text-primary-color' />
            </div>
            <div className='md:col-span-4 col-span-8 space-y-5'>
              {EVENT_SCHEDULE.filter(({ date }) => date === 18).map(({ name, date, day, month, time }, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <div key={index} className='bg-muted rounded-md py-5 px-8 flex items-center justify-start'>
                  <Paragraph className='sm:text-lg font-medium text-sm text-center pr-8 border-r border-off-black/20 mr-8' parentClassName=''>
                    <span className='text-sm text-muted-foreground'>{month}</span>
                    <br />
                    <span className='text-primary-color font-bold text-3xl font-clash-display'>{date}</span>
                  </Paragraph>
                  <div>
                    <Paragraph className='sm:text-lg font-medium text-sm' parentClassName=''>
                      {name}
                      <br />
                      <span className='text-xs text-muted-foreground'>
                        {day} <span className='text-[8px] inline-block px-1.5 relative -top-0.5'>●</span> {time}
                      </span>
                    </Paragraph>
                  </div>
                </div>
              ))}
              <div className='py-3'>
                <div className='text-muted-foreground text-xs border-t-4 border-t-off-black/20 border-dotted relative'>
                  <p className='absolute -top-px left-0 -translate-y-1/2 bg-background px-8'>Day 1 wrap-up</p>
                </div>
              </div>
            </div>
            <div className='md:col-span-2 col-span-8 md:!col-start-1 md:pt-0 pt-8'>
              <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>
                March 19th, 2024 <span className='text-[8px] inline-block px-4 relative -top-0.5'>●</span>Day 2
              </Paragraph>
              <Line className='text-primary-color' />
            </div>
            <div className='md:col-span-4 col-span-8 space-y-5 md:!col-start-3'>
              {EVENT_SCHEDULE.filter(({ date }) => date === 19).map(({ name, date, day, month, time }, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <div key={index} className='bg-muted rounded-md py-5 px-8 flex items-center justify-start'>
                  <Paragraph className='sm:text-lg font-medium text-sm text-center pr-8 border-r border-off-black/20 mr-8' parentClassName=''>
                    <span className='text-sm text-muted-foreground'>{month}</span>
                    <br />
                    <span className='text-primary-color font-bold text-3xl font-clash-display'>{date}</span>
                  </Paragraph>
                  <div>
                    <Paragraph className='sm:text-lg font-medium text-sm' parentClassName=''>
                      {name}
                      <br />
                      <span className='text-xs text-muted-foreground'>
                        {day} <span className='text-[8px] inline-block px-1.5 relative -top-0.5'>●</span> {time}
                      </span>
                    </Paragraph>
                  </div>
                </div>
              ))}
              <div className='py-5'>
                <div className='text-muted-foreground text-xs border-t-4 border-t-off-black/20 border-dotted relative'>
                  <p className='absolute -top-px left-0 -translate-y-1/2 bg-background px-8'>Day 2 wrap-up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
