import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { Events } from '@/components/pages/events';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Events',
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <Events />
        <Footer />
      </main>
    </Fragment>
  );
}
