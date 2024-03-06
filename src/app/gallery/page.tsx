import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { RegisterCard } from '@/components/global/register-card';
import { Gallery } from '@/components/pages/gallery';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "Discover the visual journey of Eblaze's workshops and events through our gallery. Explore captivating images showcasing our hands-on learning experiences, expert instructors, and innovative projects.",
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <RegisterCard />
        <Gallery />
        <Footer />
      </main>
    </Fragment>
  );
}
