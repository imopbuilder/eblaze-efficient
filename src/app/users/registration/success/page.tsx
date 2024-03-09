import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';

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
            <div className='text-center max-w-4xl mx-auto'>
              <h3>Registration Confirmed</h3>
              <p className='md:text-base text-sm mt-2 mb-5'>
                Congratulations! Your registration for the{' '}
                <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                  Eblaze
                </Link>{' '}
                workshop has been successfully confirmed. Get ready to embark on an exciting journey of learning and discovery in the world of
                electronics and electrical engineering. We're thrilled to have you join us at SVUCE for an immersive experience filled with hands-on
                learning, insightful sessions, and networking opportunities.
              </p>
              <p className='md:text-base text-sm mt-2 mb-5'>
                You will shortly receive an email from the Eblaze team with further details and important information about the workshop. Keep an eye
                on your inbox! If you have any questions or need assistance, feel free to reach out to us at{' '}
                <Link href={'/contact'} className='font-semibold hover:underline underline-offset-4'>
                  Contact us
                </Link>
                . Thank you for choosing Eblaze – let's ignite innovation together!
              </p>
              <Button size='lg'>
                <Link href={'/'}>Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
