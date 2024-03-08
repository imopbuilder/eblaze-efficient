export function getStripePrice(price: number) {
  return Number((price / (1 - 2.36 / 100)).toFixed(2));
}
