import { Footer } from '@/components/global/footer';
import { Contact } from '@/components/pages/contact';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  return (
    <Fragment>
      <main>
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
}
