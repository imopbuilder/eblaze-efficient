import { Footer } from '@/components/global/footer';
import { Contact } from '@/components/pages/contact';
import { Events } from '@/components/pages/events';
import { About } from '@/components/pages/home/about';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <main className=''>
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
