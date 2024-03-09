import { RegistrationSuccess } from '@/components/global/emails/registration-success';
import { render } from '@react-email/render';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const sig = headers().get('stripe-signature') as string;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEB_HOOK_SECRET);
  } catch (err) {
    console.log(`❌ Stripe Error ${err}`);
    return new Response(`Webhook Error: ${err}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const customerEmail = 'lightlightening1@gmail.com';

        // email to customer
        const emailHtml = render(
          RegistrationSuccess({ name: 'Op Candidate', events: [{ name: 'Eblaze', description: 'hello' }], registrationId: 'your_registered_id' }),
        );

        const options = {
          from: {
            name: 'Eblaze Team',
            address: 'rahulpalamarthi@gmail.com',
          },
          to: customerEmail,
          subject: 'Confirmation of Registration to Eblaze Workshop',
          html: emailHtml,
        };
        await transporter.sendMail(options);
        break;
      }
      default:
        throw new Error('Unhandled relevant event!');
    }
  } catch (error) {
    console.log(error);
    return new Response('Stripe Webhook handler failed. View logs.', {
      status: 400,
    });
  }

  return new Response(JSON.stringify({ received: true }));
}
