import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { Registrations } from '@/components/pages/users/registration';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Registration',
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
