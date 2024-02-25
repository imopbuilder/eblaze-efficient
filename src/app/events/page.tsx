import { Footer } from '@/components/global/footer';
import { Events } from '@/components/pages/events';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <main>
        <Events />
        <Footer />
      </main>
    </Fragment>
  );
}
