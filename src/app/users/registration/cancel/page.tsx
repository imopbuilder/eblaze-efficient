import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Registration Cancel',
  description:
    'Ready to join the next workshop or training program at Eblaze? Register now to secure your spot and embark on a journey of learning and discovery in electronics and electrical engineering.',
};

export default function Page() {
  if (process.env.REGISTRATION_STATUS !== 'OPEN') return notFound();

  return (
    <Fragment>
      <Header />
      <main>
        <section>
          <div className='min-h-rvh px-5 md:py-14 py-10'>
            <div className='text-center max-w-4xl mx-auto'>
              <h3>Payment Issue</h3>
              <p className='md:text-base text-sm mt-2 mb-5'>
                We apologize for the inconvenience. It seems there was an issue with your payment for{' '}
                <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                  Eblaze
                </Link>
                . Please accept our apologies for any inconvenience caused. To resolve this issue, please visit our contact page. We're here to assist
                you and ensure a smooth registration process. Thank you for your understanding.
              </p>
              <Button size='lg'>
                <Link href={'/'}>Back to Home</Link>
              </Button>
              <Button className='ml-5' size='lg'>
                <Link href={'/contact'}>Contact us</Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
