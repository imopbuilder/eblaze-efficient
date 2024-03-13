ALTER TABLE "eblaze_students" RENAME COLUMN "checkout_session_id" TO "session_id";--> statement-breakpoint
ALTER TABLE "eblaze_students" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "eblaze_students" ALTER COLUMN "price" SET DATA TYPE smallint;--> statement-breakpoint
ALTER TABLE "eblaze_students" ADD COLUMN "email" varchar(60) NOT NULL;--> statement-breakpoint
ALTER TABLE "eblaze_students" ADD COLUMN "phone_number" varchar(60) NOT NULL;--> statement-breakpoint
ALTER TABLE "eblaze_students" ADD COLUMN "is_verified" boolean DEFAULT false;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "student_idx" ON "eblaze_students" ("id");