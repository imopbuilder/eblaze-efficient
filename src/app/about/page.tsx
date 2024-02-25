import { Footer } from '@/components/global/footer';
import { About } from '@/components/pages/about';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <main>
        <About />
        <Footer />
      </main>
    </Fragment>
  );
}
