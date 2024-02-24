import { Contact } from '@/components/pages/contact';
import { Events } from '@/components/pages/events';
import { About } from '@/components/pages/home/about';

export default function Page() {
  return (
    <main className=''>
      <section className='sticky top-0 bg-blue-200'>
        <div className='min-h-screen'>hello</div>
      </section>
      <About />
      <Events />
      <Contact />
      <section className='relative z-20 bg-blue-200'>
        <div className='min-h-screen'>hello</div>
      </section>
      <section className='relative z-20 bg-blue-200'>
        <div className='min-h-screen'>hello</div>
      </section>
    </main>
  );
}
