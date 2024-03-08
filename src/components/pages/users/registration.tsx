import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import Image from 'next/image';
import Link from 'next/link';
import { ComboPackRegistrationForm } from './client';

export function Registrations() {
  return (
    <section className='py-14'>
      <div className='md:px-5 px-3 min-h-screen'>
        <div className='grid grid-cols-8'>
          <h1 className='uppercase col-span-8'>
            Register{' '}
            <Image
              src={'/images/ui/app/registration-heading.svg'}
              className='inline-block md:w-[9rem] sm:w-[6rem] w-[5rem] h-auto relative -top-2 animate-move-ease'
              alt='about'
              width={100}
              height={100}
              loading='lazy'
              unoptimized
            />
          </h1>
          <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>To Event</h1>
        </div>
        <RegistrationContent />
      </div>
    </section>
  );
}

function RegistrationContent() {
  const STATUS = process.env.REGISTRATION_STATUS;

  if (STATUS === 'CLOSED')
    return (
      <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color '>
            Registrations Closed{' '}
            <Image
              src='/images/ui/registration/heart-on-fire.png'
              className='inline-block w-6 h-auto ml-px'
              width='25'
              height='25'
              alt='Logo'
              loading='lazy'
              unoptimized
            />
          </Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <div>
            <Paragraph className='mb-3.5 sm:text-lg font-medium text-sm'>
              We regret to inform you that the registrations for our{' '}
              <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                Eblaze
              </Link>{' '}
              event have been closed as of this year prior to the event date. We appreciate your interest and encourage you to stay tuned for future
              events and opportunities. Thank you for your understanding.
            </Paragraph>
          </div>
        </div>
      </div>
    );

  if (STATUS === 'OPENS_SOON')
    return (
      <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color '>
            Registrations Opens Soon{' '}
            <Image
              src='/images/ui/registration/rocket.png'
              className='inline-block w-6 h-auto ml-px'
              width='25'
              height='25'
              alt='Logo'
              loading='lazy'
              unoptimized
            />
          </Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <div>
            <Paragraph className='mb-3.5 sm:text-lg font-medium text-sm'>
              We are excited to announce that the registration for our{' '}
              <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                Eblaze
              </Link>{' '}
              event will be opening soon. Stay tuned for updates on dates and how to secure your spot. We look forward to welcoming you to our
              upcoming event!
            </Paragraph>
          </div>
        </div>
      </div>
    );

  // STATUS === 'OPEN'
  return (
    <div>
      <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color '>
            Registrations are Live{' '}
            <Image
              src='/images/ui/app/logo.png'
              className='inline-block w-6 h-auto ml-px'
              width='25'
              height='25'
              alt='Logo'
              loading='lazy'
              unoptimized
            />
          </Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <div>
            <Paragraph className='mb-3.5 sm:text-lg font-medium text-sm'>
              Registrations for the highly anticipated{' '}
              <Link href={'/'} className='text-primary-color font-semibold hover:underline underline-offset-4'>
                Eblaze
              </Link>{' '}
              workshop are now LIVE! Dive into the world of electronics and electrical engineering with us at Sri Venkateswara University College of
              Engineering, Tirupati. Led by industry experts, Eblaze offers hands-on learning experiences, insightful sessions, and networking
              opportunities.
            </Paragraph>
            <Paragraph className='mb-3.5 sm:text-lg font-medium text-sm'>
              Seize this opportunity to expand your knowledge, connect with like-minded individuals, and unleash your creativity. Don't wait - secure
              your spot today before seats fill up! Join us at Eblaze and let's ignite innovation together!
            </Paragraph>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-1'>
        <div className='md:col-span-2 col-span-8'>
          <Paragraph className='pb-1 font-semibold text-sm text-primary-color '>Combo Pack</Paragraph>
          <Line className='text-primary-color' />
        </div>
        <div className='md:col-span-4 col-span-8'>
          <h3 className=''>Combo Pack Registraton Form</h3>
          <p className='text-sm text-muted-foreground pb-3'>Enter the details to register to Eblaze</p>
          <ComboPackRegistrationForm />
        </div>
      </div>
    </div>
  );
}

// function Pack() {
//   return (
//     <div className='grid grid-cols-2 md:gap-6 gap-3'>
//       {COMBO_PACK_REGISTRATIONS.map((val) => (
//         <PackCard key={val.id} {...val} />
//       ))}
//     </div>
//   );
// }

// function PackCard({ id, eventName, description, price, image, kits }: EventRegistration) {
//   return (
//     <div className={`bg-muted md:p-5 p-3.5 rounded-xl ${id === 'cpr-logo' ? 'flex items-center justify-center' : ''}`}>
//       <div>
//         <Image src={image.src} className='w-full h-auto rounded-md' width={100} height={100} alt={image.alt} loading='lazy' unoptimized />
//       </div>
//       {id === 'cpr-logo' ? null : (
//         <Fragment>
//           <p className='md:text-lg text-base font-medium pt-3 pb-1 font-clash-display whitespace-pre-wrap'>{eventName}</p>
//           <p className='md:text-sm text-xs text-muted-foreground'>{description}</p>
//           <div className='border-t border-t-primary-color py-3 mt-3 space-y-2'>
//             {kits.map((kit, index) => (
//               // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
//               <p key={index} className='flex items-center justify-start gap-2 text-xs font-semibold'>
//                 {kit.status ? (
//                   <span className='bg-primary-color rounded-full p-0.5 flex items-center justify-center'>
//                     <Check className='text-muted' size={14} strokeWidth={3} />
//                   </span>
//                 ) : (
//                   <span className='bg-off-black rounded-full p-0.5 flex items-center justify-center'>
//                     <X className='text-muted relative top-[0.2px]' size={14} strokeWidth={3} />
//                   </span>
//                 )}
//                 <span>{kit.name}</span>
//               </p>
//             ))}
//           </div>

//           <div className='flex items-center justify-between gap-4'>
//             <p className='my-2 font-semibold text-sm'>₹{price}</p>
//             <RegisterBtn />
//           </div>
//         </Fragment>
//       )}
//     </div>
//   );
// }
