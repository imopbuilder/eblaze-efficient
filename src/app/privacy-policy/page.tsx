import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { RegisterCard } from '@/components/global/register-card';
import { PrivacyPolicy } from '@/components/pages/privacy-policy';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "Eblaze offers top-notch workshops in electrical and electronics engineering. Join us for hands-on learning and stay ahead in today's tech world!",
};

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <RegisterCard />
        <PrivacyPolicy />
        <Footer />
      </main>
    </Fragment>
  );
}
