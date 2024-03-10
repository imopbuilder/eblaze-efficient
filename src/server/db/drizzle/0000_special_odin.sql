CREATE TABLE IF NOT EXISTS "eblaze_students" (
	"id" serial NOT NULL,
	"payment_id" varchar(255) NOT NULL,
	"student_name" varchar(60) NOT NULL,
	"student_id" varchar(60) NOT NULL,
	"student_college" varchar(60) NOT NULL,
	"pack" varchar(20) NOT NULL,
	"event_id" varchar(100) NOT NULL,
	"event_name" varchar(255) NOT NULL,
	"event_description" varchar(255),
	"price" varchar(15) NOT NULL,
	"checkout_session_id" varchar(255) NOT NULL
);
