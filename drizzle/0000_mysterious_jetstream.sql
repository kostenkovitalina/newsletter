CREATE TABLE "article" (
	"articleId" serial PRIMARY KEY NOT NULL,
	"author" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"content" text NOT NULL
);
