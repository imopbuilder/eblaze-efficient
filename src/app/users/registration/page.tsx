import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { Registrations } from '@/components/pages/users/registration';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Registration',
  description:
    'Ready to join the next workshop or training program at Eblaze? Register now to secure your spot and embark on a journey of learning and discovery in electronics and electrical engineering.',
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <Registrations />
        <Footer />
      </main>
    </Fragment>
  );
}
