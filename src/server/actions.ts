'use server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function getActiveProducts() {
  const checkProducts = await stripe.products.list();
  return checkProducts.data.filter((product) => product.active === true);
}

export async function comboPackSession(products: { productId: string; name: string; description: string; price: number }[], pack: string) {
  let activeProducts = await getActiveProducts();

  try {
    for (const product of products) {
      const stripeProduct = activeProducts.find((stripeProduct) => stripeProduct.metadata.product_id === product.productId);

      if (stripeProduct === undefined) {
        await stripe.products.create({
          name: product.name,
          default_price_data: {
            unit_amount: Math.round(product.price * 100),
            currency: 'inr',
          },
          metadata: {
            product_id: product.productId,
          },
        });
      }
    }
  } catch (error) {
    console.error('Error in creating a new product', error);
    throw error;
  }
  activeProducts = await getActiveProducts();
  const stripeItems: Stripe.Checkout.SessionCreateParams.LineItem[] | undefined = [];

  for (const product of products) {
    const stripeProduct = activeProducts.find((stripeProduct) => stripeProduct.metadata.product_id === product.productId);

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price as string,
        quantity: 1,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: 'payment',
    phone_number_collection: {
      enabled: true,
    },
    custom_fields: [
      {
        key: 'student_name_48',
        type: 'text',
        label: {
          type: 'custom',
          custom: 'Student name',
        },
        text: {
          maximum_length: 30,
          minimum_length: 4,
        },
      },
      {
        key: 'college_name_29',
        type: 'text',
        label: {
          type: 'custom',
          custom: 'College name',
        },
        text: {
          maximum_length: 50,
          minimum_length: 2,
        },
      },
      {
        key: 'student_id_36',
        type: 'text',
        label: {
          type: 'custom',
          custom: 'Student ID',
        },
        text: {
          maximum_length: 50,
          minimum_length: 2,
        },
      },
    ],
    metadata: {
      pack,
    },
    success_url: `${
      process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_BASE_URL
    }/users/registration/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:
      process.env.NODE_ENV === 'development' ? 'http://localhost:3000/cancel' : `${process.env.NEXT_PUBLIC_BASE_URL}/users/registration/cancel`,
  });

  return {
    url: session.url,
  };
}
