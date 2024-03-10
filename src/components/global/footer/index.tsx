import Star from '@/components/global/icons/star';
import { Button } from '@/components/ui/button';
import { APP_LINKS, OTHER_LINKS, PROFILE, REGISTRATION_ROUTE } from '@/constants/app';
import { CONTACT } from '@/constants/contact';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '../icons/arrow';
import { FooterIntro, FooterSection } from './client';

export function Footer() {
  return (
    <FooterSection>
      <div className='rounded-lg bg-primary-color'>
        <div className='pt-20'>
          <FooterIntro />
        </div>
        <div>
          <Workspace />
          <SocialLinks />
          <Sitemap />
        </div>
      </div>
      <FooterOutro />
    </FooterSection>
  );
}

function Workspace() {
  return (
    <div className='pt-20'>
      <p className='text-xs p-5 text-background font-bold'>Workshop</p>
      <ul className='group/ul'>
        <li className='border-t-2 group-hover/ul:blur-[6px] group-hover/ul:hover:blur-0 duration-500'>
          <Link
            href={REGISTRATION_ROUTE.href}
            className={
              'group inline-flex items-center justify-between text-muted bg-primary-color p-5 font-clash-display w-full lg:text-6xl text-4xl font-normal capitalize'
            }
          >
            {REGISTRATION_ROUTE.label}
            <span>
              <ArrowLink />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className='pt-80'>
      <p className='text-xs p-5 text-background font-bold'>Socials</p>
      <ul className='group/ul'>
        {CONTACT.map(({ id, social, href }) => (
          <li key={id} className='border-t-2 group-hover/ul:blur-[6px] font-clash-display group-hover/ul:hover:blur-0 duration-500'>
            <Link
              href={href}
              className={
                'group inline-flex items-center justify-between text-muted bg-primary-color p-5 w-full lg:text-6xl text-4xl font-normal capitalize'
              }
              target='_blank'
              rel='noreferrer'
            >
              {social}
              <span>
                <ArrowLink />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sitemap() {
  return (
    <div>
      <p className='text-xs px-5 pb-5 pt-80 text-background font-bold'>Site map</p>
      <ul className='group/ul'>
        {APP_LINKS.map(({ id, label, href }) => (
          <li key={id} className='border-t-2 group-hover/ul:blur-[6px] font-clash-display group-hover/ul:hover:blur-0 duration-500 last:rounded-b-md'>
            <Link
              href={href}
              className='group inline-flex items-center justify-between text-muted p-5 w-full lg:text-6xl text-4xl font-normal capitalize'
            >
              {label}
              <span className='rotate-0 group-hover:rotate-[360deg] duration-1000 origin-center h-10 flex items-center justify-center'>
                <Star className='lg:size-9 sm:size-7 size-6' />
              </span>
            </Link>
          </li>
        ))}
        {OTHER_LINKS.map(({ href, label }, index) => (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className='border-t-2 group-hover/ul:blur-[6px] font-clash-display group-hover/ul:hover:blur-0 duration-500 last:rounded-b-md'
          >
            <Link
              href={href}
              className='group inline-flex items-center justify-between text-muted p-5 w-full lg:text-6xl text-4xl font-normal capitalize'
            >
              {label}
              <span className='rotate-0 group-hover:rotate-[360deg] duration-1000 origin-center h-10 flex items-center justify-center'>
                <Star className='lg:size-9 sm:size-7 size-6' />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterOutro() {
  return (
    <div className='bg-background text-sm sm:py-5 py-3 px-2 font-light text-primary-color flex sm:items-center items-start justify-between sm:flex-row flex-col'>
      <p>
        Crafted by{' '}
        <Button className='group p-0 text-primary-color font-medium' variant='link'>
          <Link href={PROFILE.social} className='inline-flex items-center justify-start' target='_blank' rel='noreferrer'>
            {PROFILE.label}
            <span className='bg-primary-color mx-2 inline-flex items-center justify-center text-background rounded-full size-5 overflow-hidden group-hover:size-16 duration-300'>
              <Arrow className='-translate-x-10 translate-y-10 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 size-4' />
            </span>
          </Link>
        </Button>
        with{' '}
        <Image
          src={'/images/ui/profile/red-heart.png'}
          className='size-6 inline-block relative -top-0.5 ml-0.5'
          width={50}
          height={50}
          alt='love'
          loading='lazy'
          unoptimized
        />
      </p>
      <p className='font-medium'>© 2024 ELAZE</p>
    </div>
  );
}

function ArrowLink() {
  return (
    <div className='relative ml-1 lg:size-9 sm:size-7 size-6 overflow-hidden'>
      <div className='absolute transition-all duration-200 lg:group-hover:-translate-y-9 sm:group-hover:-translate-y-8 group-hover:-translate-y-6 lg:group-hover:translate-x-9 sm:group-hover:translate-x-7 group-hover:translate-x-6'>
        <Arrow className='lg:size-9 sm:size-7 size-6' />
        <Arrow className=' lg:size-9 sm:size-7 size-6 lg:-translate-x-9 sm:-translate-x-7 -translate-x-6' />
      </div>
    </div>
  );
}
