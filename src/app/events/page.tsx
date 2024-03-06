import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { RegisterCard } from '@/components/global/register-card';
import { Events } from '@/components/pages/events';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Explore the latest events and workshops in electrical and electronics engineering at Eblaze. Stay updated with upcoming workshops and training programs - join us and ignite your passion for electronics with Eblaze.',
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <RegisterCard />
        <Events />
        <Footer />
      </main>
    </Fragment>
  );
}
