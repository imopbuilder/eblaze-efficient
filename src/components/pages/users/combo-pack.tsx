'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { COMBO_PACK_REGISTRATIONS } from '@/constants/registration';
import { comboPackSession } from '@/server/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Copy } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './schema';

export function ComboPackRegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      collegeName: '',
      studentId: '',
      studentEmail: '',
      studentPhone: '+91',
      event: '',
      kit: '',
      paymentId: '',
    },
  });

  const event = COMBO_PACK_REGISTRATIONS.find((val) => val.id === form.watch('event'));
  const category = event?.categories.find((val) => val.id === form.watch('kit'));

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const checkoutEvent = COMBO_PACK_REGISTRATIONS.find((val) => val.id === values.event);
    const checkoutKit = checkoutEvent?.categories.find((val) => val.id === values.kit);

    if (!checkoutEvent || !checkoutKit) return;

    const price = checkoutEvent.price + checkoutKit.kits.map((val) => val.price).reduce((acc, val) => acc + val, 0);

    comboPackSession({
      values,
      products: [{ id: values.kit, name: checkoutEvent.name, description: checkoutKit.description, price }],
      pack: 'Workshop',
    })
      .then(({ url }) => {
        router.push(url);
      })
      .catch(() => {
        router.push('/cancel');
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='md:space-y-6 space-y-8'>
        <FormField
          control={form.control}
          name='studentName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Name</FormLabel>
              <FormControl>
                <Input placeholder='Your cool name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='collegeName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>College Name</FormLabel>
              <FormControl>
                <Input placeholder='Your college name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='studentId'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Id</FormLabel>
              <FormControl>
                <Input placeholder='Your student Id' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='studentEmail'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Email</FormLabel>
              <FormControl>
                <Input placeholder='Your email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='studentPhone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Phone Number</FormLabel>
              <FormControl>
                <Input placeholder='Your phone number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='event'
          render={({ field }) => (
            <FormItem className='relative z-10'>
              <FormLabel>Event</FormLabel>
              <Select
                onValueChange={(val) => {
                  field.onChange(val);
                  form.setValue('kit', '');
                }}
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className='h-auto [&>span]:line-clamp-none text-left'>
                    <SelectValue placeholder='Select event for the workshop' className='font-medium'>
                      <p>
                        <span className='inline-block w-full'>{COMBO_PACK_REGISTRATIONS.find((pack) => pack.id === field.value)?.name}</span>
                        <span className='text-muted-foreground text-xs'>
                          {COMBO_PACK_REGISTRATIONS.find((pack) => pack.id === field.value)?.description}
                        </span>
                      </p>
                    </SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='bg-background'>
                  {COMBO_PACK_REGISTRATIONS.map((val) => (
                    <SelectItem key={val.id} value={val.id}>
                      <p className='font-medium'>{val.name}</p>
                      <p className='text-xs text-muted-foreground'>{val.description}</p>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='kit'
          render={({ field }) => (
            <FormItem className='relative z-10'>
              <FormLabel>Kit details</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <FormControl>
                  <SelectTrigger className='h-auto [&>span]:line-clamp-none text-left'>
                    <SelectValue placeholder='Select kit for the event' className='font-medium'>
                      <p>
                        <span className='inline-block w-full'>{event?.categories.find((pack) => pack.id === field.value)?.name}</span>
                        <span className='text-muted-foreground text-xs'>
                          {event?.categories.find((pack) => pack.id === field.value)?.description}
                        </span>
                      </p>
                    </SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='bg-background'>
                  {event ? (
                    event?.categories?.map((val) => (
                      <SelectItem key={val.id} value={val.id}>
                        <p className='font-medium'>{val.name}</p>
                        <p className='text-xs text-muted-foreground'>{val.description}</p>
                      </SelectItem>
                    ))
                  ) : (
                    <SelectGroup>
                      <SelectLabel className='text-muted-foreground'>- Select event to display kit details -</SelectLabel>
                    </SelectGroup>
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.getValues('event') !== '' && (
          <div>
            <p className='text-sm font-medium'>Payment</p>
            <div className='bg-muted p-4 rounded-md mt-2 space-y-1'>
              <div className='flex items-center justify-between text-muted-foreground text-sm'>
                <span>{event?.name}</span>
                <span>₹{event?.price}.00</span>
              </div>
              {category?.kits.map((val) => (
                <div key={val.name} className='flex items-center justify-between text-muted-foreground text-sm'>
                  <span>{val.name}</span>
                  <span>₹{val.price}.00</span>
                </div>
              ))}
              <div className='flex items-center justify-between text-muted-foreground text-sm pt-2 !mt-2 border-t'>
                <span>Total</span>
                <span>
                  ₹{((event?.price ?? 0) + (category ? category.kits.map((val) => val.price).reduce((acc, val) => acc + val, 0) : 0)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 place-items-center bg-muted rounded-md p-5'>
          <Image
            className='w-full h-auto rounded-md'
            src='/images/ui/registration/phone-pe-registration-pic.jpg'
            width={100}
            height={100}
            alt='phone-pe-link'
            loading='lazy'
            unoptimized
          />
          <p className='text-center text-sm text-muted-foreground'>
            OR Pay using the phone number:
            <br />
            <span className='font-semibold text-base text-foreground inline-block pt-1'>+918688633619</span> <CopyPhone />
          </p>
        </div>

        <FormField
          control={form.control}
          name='paymentId'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Id or Transaction Id</FormLabel>
              <FormControl>
                <Input placeholder='After Payment Id or Transation Id' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='w-full md:text-sm text-xs relative z-10' size='lg' type='submit' disabled={loading}>
          {loading ? 'Registering to Workshop...' : 'Register to Workshop'}
        </Button>
      </form>
    </Form>
  );
}

export function CopyPhone() {
  const [showCopy, setShowCopy] = useState(true);

  async function handleCopy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopy(false);
      setTimeout(() => setShowCopy(true), 900);
    } catch (err) {
      console.log('failed to copy!');
    }
  }

  return (
    <Button type='button' className='bg-background hover:bg-muted p-0 ml-3 size-6' size='icon' onClick={() => handleCopy('918688633619')}>
      {showCopy ? <Copy className='text-muted-foreground' size={12} /> : <Check className='text-muted-foreground' size={12} />}
    </Button>
  );
}
