import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import Arrow from '@/components/global/icons/arrow';
import { Button } from '@/components/ui/button';
import { REGISTRATION } from '@/constants/registration';
import Image from 'next/image';
import Link from 'next/link';

export function Registrations() {
  return (
    <section className='sticky top-[56px]'>
      <div className='md:px-5 px-3 min-h-screen'>
        <div className='grid grid-cols-8'>
          <h1 className='uppercase col-span-8'>
            Register{' '}
            <Image
              src={'/images/ui/app/registration-heading.svg'}
              className='inline-block md:w-[9rem] sm:w-[6rem] w-[5rem] h-auto relative -top-2'
              alt='about'
              width={100}
              height={100}
              loading='lazy'
              unoptimized
            />
          </h1>
          <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>To Event</h1>
        </div>
        <RegistrationContent />
      </div>
    </section>
  );
}

function RegistrationContent() {
  const STATUS = process.env.REGISTRATION_STATUS;
  console.log('STATUS: ', STATUS);

  if (STATUS === 'CLOSED')
    return (
      <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color '>
            Registrations Closed{' '}
            <Image
              src='/images/ui/registration/heart-on-fire.png'
              className='inline-block w-6 h-auto ml-px'
              width='25'
              height='25'
              alt='Logo'
              loading='lazy'
              unoptimized
            />
          </Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <div>
            <Paragraph className='mb-3.5 sm:text-lg font-medium text-sm'>
              We regret to inform you that the registrations for our{' '}
              <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                Eblaze
              </Link>{' '}
              event have been closed as of this year prior to the event date. We appreciate your interest and encourage you to stay tuned for future
              events and opportunities. Thank you for your understanding.
            </Paragraph>
          </div>
        </div>
      </div>
    );

  if (STATUS === 'OPENS_SOON')
    return (
      <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color '>
            Registrations Opens Soon{' '}
            <Image
              src='/images/ui/registration/rocket.png'
              className='inline-block w-6 h-auto ml-px'
              width='25'
              height='25'
              alt='Logo'
              loading='lazy'
              unoptimized
            />
          </Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <div>
            <Paragraph className='mb-3.5 sm:text-lg font-medium text-sm'>
              We are excited to announce that the registration for our{' '}
              <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                Eblaze
              </Link>{' '}
              event will be opening soon. Stay tuned for updates on dates and how to secure your spot. We look forward to welcoming you to our
              upcoming event!
            </Paragraph>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color '>
            Registrations are Live{' '}
            <Image
              src='/images/ui/app/logo.png'
              className='inline-block w-6 h-auto ml-px'
              width='25'
              height='25'
              alt='Logo'
              loading='lazy'
              unoptimized
            />
          </Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <div>
            {REGISTRATION.guidelines.map((val, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Paragraph key={index} className='mb-3.5 sm:text-lg font-medium text-sm'>
                {val}
              </Paragraph>
            ))}
            <Button className='group w-full items-end justify-between h-auto p-4 mt-2 bg-off-black' asChild>
              <Link href={process.env.REGISTRATION_URL ?? '/not-found'}>
                <span>Pay for Registration</span>
                <ArrowLink />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
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
