import Image from 'next/image';
import Link from 'next/link';
import { AppProgress, NavHelperBackgrounds, NavMenuBtn } from './client';

export function Header() {
  return (
    <header className='bg-primary-color text-background sticky top-0 w-full z-20'>
      <div className='px-5 h-14 flex items-center justify-between relative'>
        <div className='w-full'>
          <Link href={'/'} className='inline-flex items-center justify-start font-medium gap-2.5'>
            <span className='size-8 inline-flex items-center justify-center bg-background rounded-full'>
              <Image
                src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png'
                className=''
                width='25'
                height='25'
                alt='Logo'
                loading='lazy'
                unoptimized
              />
            </span>
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
