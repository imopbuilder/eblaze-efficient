'use client';

import { Player } from '@lottiefiles/react-lottie-player';

export function DepartmentSphere() {
  return (
    <div className='relative border rounded-full w-full ml-auto'>
      <Player
        id='lottie-player'
        src='https://cdn.zajno.com/dev/motion/videos/not_real_time.json'
        background='transparent'
        speed={1}
        hover={true}
        loop
        autoplay
      />
      <div className='absolute top-1/2 left-1/2 w-max h-auto -translate-x-1/2 -translate-y-1/2 text-xs font-semibold z-10'>Department</div>
    </div>
  );
}
