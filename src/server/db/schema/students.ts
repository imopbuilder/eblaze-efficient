// id, payment_id, student_id, student_name, student_college, email, phone_number, pack, event-id, event_name, event_description, price, checkout_session_id

import { index, pgTableCreator, serial, smallint, varchar } from 'drizzle-orm/pg-core';

const pgTable = pgTableCreator((name) => `eblaze_${name}`);

export const students = pgTable(
  'students',
  {
    id: serial('id').primaryKey(),
    payment_id: varchar('payment_id', { length: 255 }).notNull(),
    student_name: varchar('student_name', { length: 60 }).notNull(),
    student_id: varchar('student_id', { length: 60 }).notNull(),
    student_college: varchar('student_college', { length: 60 }).notNull(),
    email: varchar('email', { length: 60 }).notNull(),
    phone_number: varchar('phone_number', { length: 60 }).notNull(),
    pack: varchar('pack', { length: 20 }).notNull(),
    event_id: varchar('event_id', { length: 100 }).notNull(),
    event_name: varchar('event_name', { length: 255 }).notNull(),
    event_description: varchar('event_description', { length: 255 }),
    price: smallint('price').notNull(),
    session_id: varchar('session_id', { length: 255 }).notNull(),
  },
  (table) => {
    return {
      studentIdx: index('student_idx').on(table.id),
    };
  },
);

export type Student = typeof students.$inferSelect;
