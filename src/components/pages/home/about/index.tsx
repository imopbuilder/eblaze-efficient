import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import { DepartmentSphere } from './client';
import { EblazeSphere } from './eblaze-about';

export function About() {
  return (
    <section className='bg-background relative z-10'>
      <div className='mx-5'>
        <h1>About</h1>
        <Line />
        <div className='flex lg:flex-row flex-col items-center justify-center gap-20 lg:mt-20 mt-10 pb-20'>
          <div>
            <EblazeSphere />
            <div className='sm:mt-16 mt-8'>
              <Paragraph className='mb-5 text-lg font-medium'>
                To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and
                then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever
                implementation you prefer.
              </Paragraph>
              <Paragraph className='text-lg font-medium'>
                To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and
                then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever
                implementation you prefer.
              </Paragraph>
            </div>
          </div>
          <div>
            <DepartmentSphere />
            <div className='sm:mt-16 mt-8'>
              <Paragraph className='text-lg mb-5 font-medium'>
                To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and
                then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever
                implementation you prefer.
              </Paragraph>
              <Paragraph className='text-lg font-medium'>
                To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and
                then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever
                implementation you prefer.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
