import { RegistrationSuccess } from '@/components/global/emails/registration-success';
import { render } from '@react-email/render';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
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
      case 'checkout.session.completed': {
        const session = event.data.object;

        const name = session.custom_fields.find((val) => val.key === 'student_name_48')?.text?.value as string;
        const customerEmail = session.customer_details?.email as string;
        const registrationId = session.payment_intent?.toString() as string;
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        const events = lineItems.data.map((val) => ({ name: val.description }));

        // email to customer
        const emailHtml = render(
          RegistrationSuccess({
            name,
            events,
            registrationId,
            sessionId: session.id,
          }),
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
