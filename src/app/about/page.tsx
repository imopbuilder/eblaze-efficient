import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { About } from '@/components/pages/about';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <About />
        <Footer />
      </main>
    </Fragment>
  );
}
