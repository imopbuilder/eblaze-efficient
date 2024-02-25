import { Footer } from '@/components/global/footer';
import { Gallery } from '@/components/pages/gallery';
import { Fragment } from 'react';

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
