'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { STANDALONE_PACK_REGISTRATIONS } from '@/constants/registration';
import { comboPackSession } from '@/server/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CopyPhone } from './combo-pack';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const formSchema = z.object({
  studentName: z
    .string()
    .min(2, {
      message: 'Student Name must be at least 2 characters.',
    })
    .max(50, {
      message: 'Student Name must be at most 50 characters.',
    }),
  collegeName: z
    .string()
    .min(2, {
      message: 'College Name must be at least 2 characters.',
    })
    .max(50, {
      message: 'College Name must be at most 50 characters.',
    }),
  studentId: z
    .string()
    .min(2, {
      message: 'Student Id must be at least 2 characters.',
    })
    .max(50, {
      message: 'Student Id must be at most 50 characters.',
    }),
  studentEmail: z.string().email(),
  studentPhone: z.string().regex(phoneRegex, 'Invalid Phone Number!'),
  events: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
  paymentId: z
    .string()
    .min(2, {
      message: 'Payment Id must be at least 2 characters.',
    })
    .max(100, {
      message: 'Payment Id must be at most 100 characters.',
    }),
  honeypot: z.string().optional(),
});

export function StandalonePackRegistrationForm() {
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
      events: [],
      paymentId: '',
      honeypot: '',
    },
  });

  const events = form.watch('events');

  function onSubmit(data: z.infer<typeof formSchema>) {
    const { honeypot, ...values } = data;

    if (honeypot !== '') return;

    setLoading(true);
    const products = STANDALONE_PACK_REGISTRATIONS.filter((val) => values.events.includes(val.id)).map((val) => ({
      id: val.id,
      name: val.name,
      price: val.price,
    }));

    comboPackSession({ values, products, pack: 'Standalone Event' })
      .then(({ url }) => {
        router.push(url);
      })
      .catch(() => {
        router.push('/cancel');
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
          name='events'
          render={() => (
            <FormItem>
              <div className='mb-2'>
                <FormLabel className='text-base'>Events</FormLabel>
              </div>
              {STANDALONE_PACK_REGISTRATIONS.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name='events'
                  render={({ field }) => {
                    return (
                      <FormItem key={item.id} className='flex flex-row items-center p-4 rounded-md space-x-3 space-y-0 bg-muted relative z-10'>
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            className='rounded-full border-[1.5px] size-5'
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(field.value?.filter((value) => value !== item.id));
                            }}
                          />
                        </FormControl>
                        <FormLabel className='text-sm font-medium'>
                          <span>{item.name}</span>
                          <span className='px-3 inline-block text-muted-foreground'>-</span>
                          <span className='text-xs text-muted-foreground'>₹{item.price}.00</span>
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormDescription>Select the events you want to join for the workshop</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {events.length !== 0 && (
          <div>
            <p className='text-sm font-medium'>Payment</p>
            <div className='bg-muted p-4 rounded-md mt-2 space-y-1'>
              {STANDALONE_PACK_REGISTRATIONS.filter((val) => events.includes(val.id)).map((val) => (
                <div key={val.name} className='flex items-center justify-between text-muted-foreground text-sm'>
                  <span>{val.name}</span>
                  <span>₹{val.price}.00</span>
                </div>
              ))}
              <div className='flex items-center justify-between text-muted-foreground text-sm pt-2 !mt-2 border-t'>
                <span>Total</span>
                <span>
                  ₹
                  {STANDALONE_PACK_REGISTRATIONS.filter((val) => events.includes(val.id))
                    .reduce((acc, val) => acc + val.price, 0)
                    .toFixed(2)}
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
        <FormField
          control={form.control}
          name='honeypot'
          render={({ field }) => (
            <FormItem className='hidden'>
              <FormLabel>Honeypot</FormLabel>
              <FormControl>
                <Input placeholder='Enter honeypot' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full relative z-10' type='submit' disabled={loading}>
          {loading ? 'Registering to Events...' : 'Register to Events'}
        </Button>
      </form>
    </Form>
  );
}
