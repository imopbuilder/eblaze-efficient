'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { COMBO_PACK_REGISTRATIONS } from '@/constants/registration';
import { calculateProcessingFee, calculateTotalPrice } from '@/lib/utils/calculate-processing-fee';
import { comboPackSession } from '@/server/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  event: z.string().min(1, { message: 'Please Select an event to display' }),
  kit: z.string().min(1, { message: 'Please Select a kit to display' }),
});

export function ComboPackRegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event: '',
      kit: '',
    },
  });

  const event = COMBO_PACK_REGISTRATIONS.find((val) => val.id === form.watch('event'));
  const category = event?.categories.find((val) => val.id === form.watch('kit'));

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const checkoutEvent = COMBO_PACK_REGISTRATIONS.find((val) => val.id === values.event);
    const checkoutKit = checkoutEvent?.categories.find((val) => val.id === values.kit);

    if (!checkoutEvent || !checkoutKit) return;

    const price = calculateTotalPrice(checkoutEvent.price + checkoutKit.kits.map((val) => val.price).reduce((acc, val) => acc + val, 0));

    comboPackSession([{ productId: values.kit, name: checkoutEvent.name, description: checkoutKit.description, price }], 'Workshop').then(
      ({ url }) => {
        router.push(url ?? '/cancel');
      },
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
              <div className='flex items-center justify-between text-muted-foreground text-sm'>
                <span>Processing Fee</span>
                <span>₹{calculateProcessingFee({ event, category })}</span>
              </div>
              <div className='flex items-center justify-between text-muted-foreground text-sm pt-2 !mt-2 border-t'>
                <span>Total</span>
                <span>
                  ₹
                  {calculateTotalPrice(
                    (event?.price ?? 0) + (category ? category.kits.map((val) => val.price).reduce((acc, val) => acc + val, 0) : 0),
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
        <Button className='w-full md:text-sm text-xs relative z-10' size='lg' type='submit' disabled={loading}>
          {loading ? 'Registering to Workshop...' : 'Register to Workshop'}
        </Button>
      </form>
    </Form>
  );
}
