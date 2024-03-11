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
