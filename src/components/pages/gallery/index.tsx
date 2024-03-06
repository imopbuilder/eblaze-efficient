import { GALLERY } from '@/constants/gallery';
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
                src={'/images/ui/app/gallery-heading.svg'}
                className='inline-block md:w-[9rem] sm:w-[6rem] w-[5rem] h-auto relative -top-2 animate-move-ease'
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
        <div className='mx-5 py-5'>
          <div>
            {GALLERY.map(({ img }, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className='pb-5'>
                <Image className='w-full' src={img.src} width={100} height={100} alt={img.alt} loading='lazy' unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
