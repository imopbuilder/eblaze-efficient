import Link from 'next/link';
import { NavHelperBackgrounds, NavMenuBtn } from './client';

export function Header() {
  return (
    <header className='bg-primary-color text-background sticky top-0 w-full z-20'>
      <div className='px-5 h-14 flex items-center justify-between relative'>
        <div className='w-full'>
          <Link href={'/'} className='text-background font-medium'>
            ⚡
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
