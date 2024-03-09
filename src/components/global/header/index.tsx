import Image from 'next/image';
import Link from 'next/link';
import { AppProgress, NavHelperBackgrounds, NavMenuBtn } from './client';

export function Header() {
  return (
    <header className='bg-primary-color text-background sticky top-0 w-full z-20'>
      <div className='md:px-5 px-3 h-14 flex items-center justify-between relative'>
        <div className='w-full'>
          <Link href={'/'} className='inline-flex items-center justify-start font-medium gap-2.5'>
            <span className='size-8 inline-flex items-center justify-center bg-background rounded-full'>
              <Image src='/images/ui/app/logo.png' width='25' height='25' alt='Logo' loading='lazy' unoptimized />
            </span>
            <Image src='/images/ui/app/eblaze-logo.jpg' className='size-8 rounded-md' width='25' height='25' alt='Logo' loading='lazy' unoptimized />
            <span className='text-sm font-medium inline-block relative top-0.5'>Eblaze</span>
          </Link>
        </div>
        <div className='flex items-center justify-center gap-8'>
          <AppProgress />
          <NavMenuBtn />
        </div>
      </div>
      <NavHelperBackgrounds />
    </header>
  );
}
