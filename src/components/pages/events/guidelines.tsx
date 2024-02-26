import { Event } from '@/constants/events';

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
