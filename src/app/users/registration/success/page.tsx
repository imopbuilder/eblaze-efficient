import { Footer } from '@/components/global/footer';
import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import { Header } from '@/components/global/header';
import { StripeSuccess } from '@/components/pages/users/success';
import { Skeleton } from '@/components/ui/skeleton';
import { Metadata } from 'next';
import Link from 'next/link';
import { Fragment, Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Registration Success',
  description:
    'Ready to join the next workshop or training program at Eblaze? Register now to secure your spot and embark on a journey of learning and discovery in electronics and electrical engineering.',
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <section>
          <div className='min-h-rvh px-5 md:py-14 py-10'>
            <div className='grid grid-cols-8'>
              <h1 className='uppercase col-span-8'>Spot</h1>
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
                    <Paragraph className='sm:text-lg font-medium text-sm'>
                      Congratulations! Your registration for the{' '}
                      <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                        Eblaze
                      </Link>{' '}
                      workshop has been successfully confirmed. Get ready to embark on an exciting journey of learning and discovery in the world of
                      electronics and electrical engineering. We're thrilled to have you join us at SVUCE for an immersive experience filled with
                      hands-on learning, insightful sessions, and networking opportunities.
                    </Paragraph>
                    <Paragraph className='sm:text-lg font-medium text-sm'>
                      You will shortly receive an email from the Eblaze team with further details and important information about the workshop. Keep
                      an eye on your inbox! If you have any questions or need assistance, feel free to reach out to us at{' '}
                      <Link href={'/contact'} className='font-semibold hover:underline underline-offset-4'>
                        Contact us
                      </Link>
                      . Thank you for choosing Eblaze – let's ignite innovation together!
                    </Paragraph>
                    <div>
                      <Suspense fallback={<Skeleton className='w-full h-10 rounded-md bg-muted' />}>
                        <StripeSuccess />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
