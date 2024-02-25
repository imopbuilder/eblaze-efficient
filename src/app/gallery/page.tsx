import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { Gallery } from '@/components/pages/gallery';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <Gallery />
        <Footer />
      </main>
    </Fragment>
  );
}
