import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { HomeRegisterCard } from '@/components/global/register-card';
import { About } from '@/components/pages/about';
import { Contact, Location } from '@/components/pages/contact';
import { EventSchedule, Events } from '@/components/pages/events';
import { CountdownSection, HeroSection, HomeFaqs } from '@/components/pages/home';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <HomeRegisterCard />
        <HeroSection />
        <CountdownSection />
        <About />
        <Events />
        <EventSchedule />
        <Location />
        <HomeFaqs />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
}
