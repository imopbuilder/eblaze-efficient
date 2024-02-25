import { Footer } from '@/components/global/footer';
import { About } from '@/components/pages/about';
import { Contact, Location } from '@/components/pages/contact';
import { Events } from '@/components/pages/events';
import { HeroSection } from '@/components/pages/home';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <main>
        <HeroSection />
        <About />
        <Events />
        <Location />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
}
