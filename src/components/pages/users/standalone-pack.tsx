'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { STANDALONE_PACK_REGISTRATIONS } from '@/constants/registration';
import { calculateTotalPrice } from '@/lib/utils/calculate-processing-fee';
import { comboPackSession } from '@/server/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  events: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

function calculateProcessingFee(events: z.infer<typeof formSchema>['events']) {
  const price = STANDALONE_PACK_REGISTRATIONS.filter((val) => events.includes(val.id)).reduce((acc, val) => acc + val.price, 0);

  return (calculateTotalPrice(price) - price).toFixed(2);
}

export function StandalonePackRegistrationForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      events: [],
    },
  });

  const events = form.watch('events');

  function onSubmit(values: z.infer<typeof formSchema>) {
    const products = STANDALONE_PACK_REGISTRATIONS.filter((val) => values.events.includes(val.id)).map((val) => ({
      productId: val.id,
      name: val.name,
      description: val.description,
      price: val.price,
    }));

    comboPackSession(products, 'Standalone Event').then(({ url }) => {
      router.push(url ?? '/cancel');
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
              <div className='flex items-center justify-between text-muted-foreground text-sm'>
                <span>Processing Fee</span>
                <span>₹{calculateProcessingFee(events)}</span>
              </div>
              <div className='flex items-center justify-between text-muted-foreground text-sm pt-2 !mt-2 border-t'>
                <span>Total</span>
                <span>
                  ₹
                  {calculateTotalPrice(
                    STANDALONE_PACK_REGISTRATIONS.filter((val) => events.includes(val.id)).reduce((acc, val) => acc + val.price, 0),
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
        <Button className='w-full relative z-10' type='submit'>
          Register to Events
        </Button>
      </form>
    </Form>
  );
}
