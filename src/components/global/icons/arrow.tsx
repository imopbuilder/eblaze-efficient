import { cn } from '@/lib/utils/cn';
import { ComponentPropsWithoutRef } from 'react';

export default function Arrow({ className, ...props }: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg className={cn('size-10', className)} viewBox='0 0 99 99' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <title>Navigate</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 18.084 16.925 0H99v81.38L80.28 99V58.698c0-9.81.097-18.696.3-26.668L14.829 97.163 1.799 82.909l65.75-65.13q-11.683.306-26.21.305z'
        fill='currentColor'
      />
    </svg>
  );
}
