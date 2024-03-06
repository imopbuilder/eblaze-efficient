import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { RegisterCard } from '@/components/global/register-card';
import { Contact } from '@/components/pages/contact';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Need assistance or have a query? Contact Eblaze today! Our team is here to provide expert guidance and support for all your electrical and electronics engineering needs.',
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <RegisterCard />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
}
