'use server';

import { RegistrationSuccess } from '@/components/global/emails/registration-success';
import { formSchema } from '@/components/pages/users/schema';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import { db } from './db';
import { students } from './db/schema/students';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

type Products = {
  id: string;
  name: string;
  description?: string;
  price: number;
};

const test = formSchema.omit({ event: true, kit: true });

export async function comboPackSession({ values, products, pack }: { values: z.infer<typeof test>; products: Products[]; pack: string }) {
  const sessionId = uuidv4();

  // email to customer
  const emailHtml = render(
    RegistrationSuccess({
      name: values.studentName,
      events: products.map(({ name }) => ({ name })),
      registrationId: values.paymentId,
      pack,
      description: products.map((val) => val.description).join(''),
      sessionId,
    }),
  );

  const options = {
    from: {
      name: 'Eblaze Team',
      address: 'eblaze2k24@gmail.com',
    },
    to: values.studentEmail,
    subject: 'Confirmation of Registration to Eblaze Workshop',
    html: emailHtml,
  };
  try {
    await transporter.sendMail(options);
  } catch (err) {
    console.log('Node mailer error: ', err);
  }

  try {
    await db.insert(students).values({
      payment_id: values.paymentId,
      student_name: values.studentName,
      student_id: values.studentId,
      student_college: values.collegeName,
      email: values.studentEmail,
      phone_number: values.studentPhone,
      pack,
      event_id: products.map((val) => val.id).join(' | '),
      event_name: products.map((val) => val.name).join(' | '),
      event_description: products.map((val) => val.description).join(' | '),
      price: products
        .map((val) => val.price)
        .reduce((acc, val) => acc + val, 0)
        .toString(),
      session_id: sessionId,
    });
  } catch (err) {
    console.log('Drizzle Error: ', err);
  }

  return {
    url: `/users/registration/success?session_id=${sessionId}`,
  };
}
