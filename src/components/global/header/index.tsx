import Link from 'next/link';
import { NavHelperBackgrounds, NavMenuBtn } from './client';

export function Header() {
  return (
    <header className='bg-primary-color text-background sticky top-0 w-full z-20'>
      <div className='px-5 h-14 flex items-center justify-between relative'>
        <div className='w-full'>
          <Link href={'/'} className='bg-background inline-flex size-8 items-center justify-center rounded-full font-medium'>
            <img
              src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png'
              alt='Fire'
              width='25'
              height='25'
            />
          </Link>
        </div>
        <div>
          <NavMenuBtn />
        </div>
      </div>
      <NavHelperBackgrounds />
    </header>
  );
}
