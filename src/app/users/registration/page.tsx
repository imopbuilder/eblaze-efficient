import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { Registrations } from '@/components/pages/users/registration';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <main>
        <Registrations />
        <Footer />
      </main>
    </Fragment>
  );
}
