CREATE TABLE "public"."Todo" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  done boolean NOT NULL
);