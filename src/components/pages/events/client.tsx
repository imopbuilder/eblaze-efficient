'use client';

import { useMediaQuery } from '@/client/hooks/use-media-query.hook';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Event } from '@/constants/events';
import { Minimize, NotepadText } from 'lucide-react';

import Line from '@/components/global/framer/line';
import { Button } from '@/components/ui/button';
import { GuidelinesContent } from './guidelines';

export function ResponsiveEventGuidelines({ title, lead, guidelines, note }: Event) {
  const isDesktop = useMediaQuery('(min-width: 640px)');

  if (isDesktop)
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className='gap-8 bg-off-black sm:w-max w-full justify-between relative z-50'>
            <span>Guidelines</span>
            <NotepadText size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-primary-color font-clash-display font-normal tracking-wide'>{title}</DialogTitle>
            <DialogDescription className='pb-2'>
              Lead by <span className='capitalize font-medium'>{lead}</span>
            </DialogDescription>
            <Line className='text-primary-color' />
          </DialogHeader>
          <GuidelinesContent guidelines={guidelines} note={note} />
          <DialogFooter>
            <DialogClose asChild>
              <Button type='button' className='gap-4 relative z-50 text-xs'>
                <span>Close Guidelines</span>
                <Minimize size={16} />
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className='gap-8 bg-off-black sm:w-max w-full justify-between relative z-50'>
          <span>Guidelines</span>
          <NotepadText size={16} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='border-0'>
        <DrawerHeader className='text-left'>
          <DrawerTitle className='text-primary-color font-clash-display font-normal tracking-wide'>{title}</DrawerTitle>
          <DrawerDescription className='pb-2'>
            Lead by <span className='capitalize font-medium'>{lead}</span>
          </DrawerDescription>
          <Line className='text-primary-color' />
        </DrawerHeader>
        <div className='px-4'>
          <GuidelinesContent guidelines={guidelines} note={note} />
        </div>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button type='button' className='gap-4 relative z-50 text-xs'>
              <span>Close Guidelines</span>
              <Minimize size={16} />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
