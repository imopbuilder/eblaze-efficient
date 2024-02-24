import { cn } from '@/lib/utils/cn';
import { ComponentPropsWithoutRef } from 'react';

export default function Star({ className, ...props }: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg width='31' height='30' className={cn('size-9', className)} viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <title>Navigate</title>
      <path
        d='m15.272 22.192-5.688 7.632-5.688-4.464L9.8 17.44.296 14.416l2.376-6.768 9 2.952V.736h7.272V10.6l9-2.952 2.376 6.768-9.504 3.024 5.904 7.92-5.688 4.464z'
        fill='#fff'
      />
    </svg>
  );
}
