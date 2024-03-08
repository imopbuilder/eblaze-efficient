import { EventRegistration } from '@/constants/registration';

export function calculateProcessingFee({
  event,
  category,
}: { event: EventRegistration | undefined; category: EventRegistration['categories'][number] | undefined }) {
  return (
    calculateTotalPrice((event?.price ?? 0) + (category?.kits.map((val) => val.price).reduce((acc, val) => acc + val, 0) ?? 0)) -
    ((event?.price ?? 0) + (category ? category.kits.map((val) => val.price).reduce((acc, val) => acc + val, 0) : 0))
  ).toFixed(2);
}

export function calculateTotalPrice(price: number) {
  return Number((price / (1 - 2.36 / 100)).toFixed(2));
}
