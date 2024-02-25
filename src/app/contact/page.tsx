import { Footer } from '@/components/global/footer';
import { Contact } from '@/components/pages/contact';
import { Fragment } from 'react';

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
