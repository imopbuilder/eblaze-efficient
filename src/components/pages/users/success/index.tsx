import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import { db } from '@/server/db';
import { Student, students } from '@/server/db/schema/students';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { DownloadInvoicePdf } from './client';

export async function SuccessInfo({ sessionId }: { sessionId: string }) {
  const session = await db.select().from(students).where(eq(students.session_id, sessionId));

  return (
    <Fragment>
      <div className='grid grid-cols-8'>
        <h1 className='uppercase col-span-8'>
          Spot{' '}
          <Image
            src={'/images/ui/app/registration-success-heading.svg'}
            className='inline-block md:w-[9rem] sm:w-[6rem] w-[5rem] h-auto animate-move-ease relative -top-3'
            alt='about'
            width={100}
            height={100}
            loading='lazy'
            unoptimized
          />
        </h1>
        <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>Secured</h1>
      </div>
      <div>
        <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
          <div className='md:col-span-2 col-span-8'>
            <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>Registration Success</Paragraph>
            <Line className='text-primary-color' />
          </div>
          <div className='md:col-span-4 col-span-8'>
            <div>
              <Paragraph className='sm:text-lg font-medium text-sm' parentClassName='mb-3.5'>
                Congratulations! Your registration for the{' '}
                <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                  Eblaze
                </Link>{' '}
                workshop has been successfully confirmed. Get ready to embark on an exciting journey of learning and discovery in the world of
                electronics and electrical engineering. We're thrilled to have you join us at SVUCE for an immersive experience filled with hands-on
                learning, insightful sessions, and networking opportunities.
              </Paragraph>
              <Paragraph className='sm:text-lg font-medium text-sm' parentClassName='mb-3.5'>
                You will shortly receive an email from the Eblaze team with further details and important information about the workshop. Keep an eye
                on your inbox! If you have any questions or need assistance, feel free to reach out to us at{' '}
                <Link href={'/contact'} className='font-semibold hover:underline underline-offset-4'>
                  Contact us
                </Link>
                . Thank you for choosing Eblaze - let's ignite innovation together!
              </Paragraph>
            </div>
          </div>
          <div className='md:col-span-2 col-span-8 !col-start-1'>
            <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>Registration Invoice</Paragraph>
            <Line className='text-primary-color' />
          </div>
          <div className='md:col-span-4 col-span-8'>
            <div>
              <StripeInvoice session={session[0]} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

function StripeInvoice({ session }: { session: Student }) {
  const name = session.student_name;
  const collegeName = session.student_college;

  return (
    <div className='p-5 bg-muted rounded-md'>
      <DownloadInvoicePdf name={name} email={session.email}>
        <div>
          <div className='bg-background border-t-8 border-primary-color md:p-8 p-5'>
            <div className='md:mt-16 mt-6 pb-2 flex items-center justify-center gap-7'>
              <Image src={'/images/ui/app/logo.png'} className='md:size-28 size-10' width={100} height={100} alt='logo' loading='lazy' unoptimized />
              <Image
                src='/images/ui/app/eblaze-logo.jpg'
                className='rounded-md md:size-28 size-10'
                width='100'
                height='100'
                alt='Logo'
                loading='lazy'
                unoptimized
              />
            </div>
            <div className='flex md:flex-row flex-col md:items-center items-start justify-between gap-3 my-6'>
              <span className='md:text-xl text-base font-semibold'>Eblaze Invoice</span>
              <p className='md:text-sm text-xs text-muted-foreground'>{session.payment_id}</p>
            </div>
            <div className='flex md:flex-row flex-col items-start justify-between gap-3 gap-y-5 pt-5 md:pb-12 pb-6 border-t-2'>
              <div>
                <p className='text-primary-color font-medium'>From:</p>
                <p className='font-bold md:text-lg text-base'>{name}</p>
                <p className='md:text-sm text-xs font-medium'>{collegeName}</p>
                <p className='md:text-sm text-xs font-medium text-muted-foreground mt-5'>{session.email}</p>
                <p className='md:text-sm text-xs font-medium text-muted-foreground'>{session.student_id}</p>
              </div>
              <div className='md:text-end text-start'>
                <p className='text-primary-color font-medium'>To:</p>
                <p className='font-bold md:text-lg text-base'>Eblaze</p>
                <p className='md:text-sm text-xs font-medium'>SVUCE</p>
                <p className='md:text-sm text-xs font-medium text-muted-foreground mt-5'>eblaze2k24@gmail.com</p>
              </div>
            </div>
            <div className='border-t-2 pt-5 font-medium'>{session.pack} registration</div>
            <div className='pt-3 text-sm list-none space-y-1 mb-4'>
              {session.event_name.split(' | ').map((val, index) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  className='relative ml-3'
                >
                  <p>
                    <span className=''>{index + 1}. </span> {val}{' '}
                    {session.event_description && session.event_description.replaceAll(' | ', '').length > 5 ? (
                      <span className='text-muted-foreground text-xs'>
                        <span className='inline-block px-3 text-muted-foreground text-sm'>-</span>
                        {session.event_description.split(' | ')[index]}
                      </span>
                    ) : (
                      ''
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-primary-color md:p-8 p-5 flex items-center justify-between text-background font-semibold rounded-b-lg'>
            <p className='md:text-lg text-base'>Thankyou</p>
            <p className='md:text-sm text-xs'>Eblaze</p>
          </div>
        </div>
      </DownloadInvoicePdf>
    </div>
  );
}
