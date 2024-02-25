import { Footer } from '@/components/global/footer';
import { Gallery } from '@/components/pages/gallery';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Gallery',
};

export default function Page() {
  return (
    <Fragment>
      <main>
        <Gallery />
        <Footer />
      </main>
    </Fragment>
  );
}
