import { Footer } from '@/components/global/footer';
import { About } from '@/components/pages/about';
import { Contact } from '@/components/pages/contact';
import { Events } from '@/components/pages/events';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <main>
        <section className='sticky top-0 bg-blue-200'>
          <div className='min-h-screen'>hello</div>
        </section>
        <About />
        <Events />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
}
