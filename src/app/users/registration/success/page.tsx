import { Footer } from '@/components/global/footer';
import { Header } from '@/components/global/header';
import { SuccessInfo } from '@/components/pages/users/success';
import { Skeleton } from '@/components/ui/skeleton';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Fragment, Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Registration Success',
  description:
    'Ready to join the next workshop or training program at Eblaze? Register now to secure your spot and embark on a journey of learning and discovery in electronics and electrical engineering.',
};

export default function Page({ searchParams }: { searchParams: { session_id: string | undefined } }) {
  const { session_id } = searchParams;

  if (!session_id) return notFound();

  return (
    <Fragment>
      <Header />
      <main>
        <section>
          <div className='min-h-rvh px-5 md:py-14 py-10'>
            <Suspense fallback={<Skeleton className='w-full h-10 flex items-center justify-center rounded-md bg-muted'>Loading Invoice...</Skeleton>}>
              <SuccessInfo sessionId={session_id} />
            </Suspense>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
