import Paragraph from '@/components/global/framer/paragraph';
import { Event } from '@/constants/events';
import Link from 'next/link';
import { Fragment } from 'react';

export function GuidelinesContent({ guidelines, note }: Pick<Event, 'guidelines' | 'note'>) {
  return (
    <div className='-mt-3 pb-3'>
      <div>
        <h2 className='text-sm font-semibold'>Guidelines:</h2>
        <ul className='list-decimal pl-5 pt-1'>
          {guidelines.map((val, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li key={index} className='text-sm first:pt-0 pt-0.5'>
              {val}
            </li>
          ))}
        </ul>
      </div>
      {note ? (
        <div className='pt-5'>
          <h2 className='text-sm font-semibold'>Note:</h2>
          <ul className='list-disc pl-5 pt-1'>
            {note.map((val, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index} className='text-sm first:pt-0 pt-0.5 marker:text-foreground/70'>
                {val}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export const RpsDesignHeading = <span className='text-primary-color text-sm'>Regulated Power Supply</span>;
export const TransformerDesignHeading = <span className='text-primary-color text-sm'>Transformer Design</span>;
export const IoTDesignHeading = <span className='text-primary-color text-sm'>IoT Design</span>;

export const ShowYourTalentWhatsappLink = (
  <Fragment>
    Please submit your video or photo to our whatsapp{' '}
    <Link
      href={'https://api.whatsapp.com/send?text=Hello From Eblaze!&phone=916309893029'}
      className='relative underline z-10 underline-offset-4 font-medium'
      target='_blank'
      rel='noreferrer'
    >
      +91 6309893029
    </Link>
  </Fragment>
);

function FunActivityWrapper({ heading, content, src }: { heading: string; content: string; src: string }) {
  return (
    <div>
      <span className='text-primary-color text-sm'>{heading}</span>
      <div>
        <Paragraph className='sm:text-lg font-medium text-sm'>{content}</Paragraph>
      </div>
    </div>
  );
}

export const FunActivityOne = (
  <FunActivityWrapper
    heading='Vande graff generator'
    content="Step right up and witness the magic of static electricity in action! Our Vande Graaff generator is not just for sparking curiosity - it's also a hair straightening sensation. With its powerful charge accumulation capabilities, the generator creates an electric field that can temporarily align and straighten hair follicles, resulting in a sleek and smooth hairstyle."
    src=''
  />
);

export const FunActivityTwo = (
  <FunActivityWrapper
    heading='Food challenge 
    '
    content='In this thrilling competition, participants will face off in a series of rapid-fire cooking challenges designed to test their speed, agility, and ingenuity in the kitchen. Armed with a selection of mystery ingredients and limited time on the clock, contestants must think fast, work efficiently, and unleash their inner culinary genius to whip up delectable dishes that will impress our panel of judges.'
    src=''
  />
);

export const FunActivityThree = (
  <FunActivityWrapper
    heading='Buzz wire game'
    content="The Eblaze Buzz Wire Challenge is a classic game of skill and dexterity that puts your hand-eye coordination to the test. Participants will face a series of electrifying obstacles as they attempt to guide a metal loop along a twisted wire without making contact and triggering the buzzer. It's a race against time and trembling fingers as players strive to complete the course without setting off the alarm."
    src=''
  />
);

export const FunActivityFour = (
  <FunActivityWrapper
    heading='Disposal paper cup games'
    content='The Disposal Paper Cup Games are a series of thrilling activities that challenge participants to think outside the box and make the most of everyday materials. From simple stacking challenges to elaborate obstacle courses, each game is designed to showcase the versatility and ingenuity of the humble paper cup.'
    src=''
  />
);
