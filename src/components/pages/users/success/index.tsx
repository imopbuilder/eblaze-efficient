import Image from 'next/image';
import Stripe from 'stripe';
import { DownloadInvoicePdf } from './client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const sessionId = 'cs_test_b1Hd9n3hKBxk3fvM2OYPxLIB5hpVdtQE5iG30Y9gCDAFr7FJSoBx5C7Xj9';

export async function StripeSuccess() {
  const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items'] });

  if (session.payment_status !== 'paid') return <p>Pay first</p>;

  return (
    <div className='p-5 bg-muted rounded-md'>
      <DownloadInvoicePdf
        name={session.custom_fields.find((val) => val.key === 'student_name_48')?.text?.value as string}
        email={session.custom_fields.find((val) => val.key === 'college_name_29')?.text?.value as string}
      >
        <div>
          <div className='bg-background border-t-8 border-primary-color mdp-8 p-5'>
            <div className='mt-8'>
              <Image src={'/images/ui/app/logo.png'} width={100} height={100} alt='logo' loading='lazy' unoptimized />
            </div>
            <div className='flex items-center justify-between gap-3 my-6'>
              <span className='md:text-xl text-base font-semibold'>Eblaze Invoice</span>
              <p className='md:text-sm text-xs text-muted-foreground'>{session.payment_intent?.toString()}</p>
            </div>
            <div className='flex items-start justify-between gap-3 pt-5 pb-12 border-t-2'>
              <div>
                <p className='text-primary-color font-medium'>From:</p>
                <p className='font-bold md:text-lg text-base'>{session.custom_fields.find((val) => val.key === 'student_name_48')?.text?.value}</p>
                <p className='md:text-sm text-xs font-medium'>{session.custom_fields.find((val) => val.key === 'college_name_29')?.text?.value}</p>
                <p className='md:text-sm text-xs font-medium text-muted-foreground mt-5'>{session.customer_details?.email}</p>
                <p className='md:text-sm text-xs font-medium text-muted-foreground'>
                  {session.custom_fields.find((val) => val.key === 'student_id_36')?.text?.value}
                </p>
              </div>
              <div className='text-end'>
                <p className='text-primary-color font-medium'>To:</p>
                <p className='font-bold md:text-lg text-base'>Eblaze</p>
                <p className='md:text-sm text-xs font-medium'>SVUCE</p>
                <p className='md:text-sm text-xs font-medium text-muted-foreground mt-5'>eblaze2k24@gmail.com</p>
              </div>
            </div>
            <div className='border-t-2 pt-5 font-medium'>{session?.metadata?.pack} registration</div>
            <ul className='pt-3 text-sm list-disc list-inside space-y-1'>
              {session.line_items?.data.map((val) => (
                <li>{val.description}</li>
              ))}
            </ul>
          </div>
          <div className='bg-primary-color md:p-8 p-5 flex items-center justify-between text-background font-semibold rounded-b-lg'>
            <p className='md:text-lg text-base'>Thankyou</p>
            <p className='md:text-sm text-xs'>Eblaze</p>
          </div>
        </div>
      </DownloadInvoicePdf>
    </div>
  );
}
