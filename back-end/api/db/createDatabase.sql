CREATE TABLE applications (
	"id" serial PRIMARY KEY,
	"name" VARCHAR (255) UNIQUE NOT NULL,
	"whatsapp_string" VARCHAR (255) UNIQUE NOT NULL,
	"front_end_exp" TEXT NOT NULL,
	"front_end_exp_years" INTEGER NOT NULL,
	"back_end_exp" TEXT NOT NULL,
	"back_end_exp_years" INTEGER NOT NULL,
	"db_exp" TEXT NOT NULL,
	"db_exp_years" INTEGER NOT NULL,
	"camunda_exp" BOOLEAN NOT NULL,
	"healthcare_exp" BOOLEAN NOT NULL,
	"comments" TEXT,
	"created_at" TIMESTAMP DEFAULT NOW()
);