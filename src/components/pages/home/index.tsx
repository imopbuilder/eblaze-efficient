import Line from '@/components/global/framer/line';
import Paragraph from '@/components/global/framer/paragraph';
import Arrow from '@/components/global/icons/arrow';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { REGISTRATION_ROUTE } from '@/constants/app';
import { FAQS, type Faqs } from '@/constants/faqs';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className='bg-primary-color text-background sticky top-[56px]'>
      <div className='mx-5 min-h-[120vh]'>
        <div className='sm:py-24 py-[84px]'>
          <div className='min-h-rvh'>
            <Paragraph className='text-sm sm:text-lg font-semibold text-background sm:pb-0 pb-4' parentClassName='relative md:top-3 sm:top-1 top-3'>
              Spark Your Passion
            </Paragraph>
            <Paragraph className='text-background xl:text-[7rem] font-clash-display lg:text-[6rem] md:text-[5rem] font-normal text-[3.5rem] mb-8 lg:pt-0 md:pt-3 sm:pt-4 pt-4'>
              Join Our{' '}
              <Image
                src={'/images/ui/app/hero-section.svg'}
                className='rounded-md inline-block bg-background relative -top-2 md:w-[100px] w-[70px] h-auto animate-move-ease'
                width={100}
                height={100}
                alt='hero-rocket'
                loading='lazy'
                unoptimized
              />{' '}
              Electrifying Lineup of Events{' '}
              <Image
                src={'/images/ui/app/hero-section-2.svg'}
                className='rounded-md inline-block bg-background relative -top-2 md:w-[100px] w-[70px] h-auto animate-move-ease'
                width={100}
                height={100}
                alt='hero-rocket'
                loading='lazy'
                unoptimized
              />{' '}
              and Gatherings
            </Paragraph>
            <Line className='text-background stroke-2' />
            <Link href={REGISTRATION_ROUTE.href} className='group inline-flex w-full py-5 px-3 items-center justify-between relative z-50'>
              <span>
                <Paragraph className='text-background font-bold text-lg flex items-center justify-start gap-1'>
                  {REGISTRATION_ROUTE.label} to Eblaze{' '}
                  <Image
                    src='/images/ui/app/logo.png'
                    className='bg-background inline-block rounded-full p-1 size-8 ml-1'
                    width='25'
                    height='25'
                    alt='Logo'
                    loading='lazy'
                    unoptimized
                  />{' '}
                </Paragraph>
              </span>
              <ArrowLink />
            </Link>
          </div>
        </div>
      </div>
    </section>
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

export function HomeFaqs() {
  return (
    <section className='bg-background relative z-10 py-14 min-h-screen'>
      <div className='mx-5'>
        <div className='grid grid-cols-8'>
          <h1 className='uppercase col-span-8'>
            Solve ur{' '}
            <Image
              src={'/images/ui/app/faqs-heading.svg'}
              className='inline-block md:w-[9rem] sm:w-[6rem] w-[5rem] h-auto animate-move-ease'
              alt='about'
              width={100}
              height={100}
              loading='lazy'
              unoptimized
            />
          </h1>
          <h1 className='uppercase sm:col-span-5 col-span-7 sm:col-start-3 col-start-2'>Queries</h1>
        </div>
        <div>
          <div className='grid grid-cols-8 pt-8 md:gap-6 gap-y-3'>
            <div className='md:col-span-2 col-span-8'>
              <Paragraph className='pb-1 font-semibold text-sm text-primary-color'>FAQs</Paragraph>
              <Line className='text-primary-color' />
            </div>
            <div className='md:col-span-4 col-span-8'>
              <Accordion type='single' defaultValue='f1' collapsible>
                {FAQS.slice(0, 5).map((faq) => (
                  <FaqsCard key={faq.index} {...faq} />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqsCard({ index, question, answer }: Faqs) {
  return (
    <AccordionItem
      value={index}
      className='border-none mb-5 duration-300 rounded-xl overflow-hidden hover:bg-primary-color bg-off-black text-background data-[state="open"]:bg-primary-color'
    >
      <AccordionTrigger
        className='p-5 hover:no-underline relative z-50 focus:outline-0 sm:text-lg text-sm focus-visible:bg-primary-color last:[&[data-state=open]>svg>path]:scale-0'
        showIcon={false}
      >
        {question}
        <Plus className='duration-200 origin-center text-background' strokeWidth={2} />
      </AccordionTrigger>
      <AccordionContent className='pb-10 mx-6 pt-8 border-t border-background sm:text-base text-sm text-muted'>{answer}</AccordionContent>
    </AccordionItem>
  );
}
