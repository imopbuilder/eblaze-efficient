import Image from 'next/image';
import { GalleryParallax } from './client';

export function Gallery() {
  return (
    <section>
      <section>
        <div className='mx-5 py-14'>
          <div className='grid grid-cols-8'>
            <h1 className='uppercase col-span-8'>
              Explore{' '}
              <Image
                src={'/images/ui/gallery/gallery-heading.png'}
                className='inline-block md:w-[9rem] sm:w-[6rem] w-[5rem] h-auto relative -top-2'
                alt='about'
                width={100}
                height={100}
                loading='lazy'
                unoptimized
              />
            </h1>
            <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>gallery</h1>
          </div>
        </div>
      </section>
      <GalleryParallax />
      <section>
        <div className='mx-5 py-10'>
          <p>Hello world</p>
        </div>
      </section>
    </section>
  );
}
