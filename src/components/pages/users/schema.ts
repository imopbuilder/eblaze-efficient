import { z } from 'zod';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const formSchema = z.object({
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
  event: z.string().min(1, { message: 'Please Select an event to display' }),
  kit: z.string().min(1, { message: 'Please Select a kit to display' }),
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
