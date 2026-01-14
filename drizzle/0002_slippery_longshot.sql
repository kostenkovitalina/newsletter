ALTER TABLE "user" RENAME COLUMN "password" TO "password_hash";--> statement-breakpoint
/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'article'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "article" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "article" ALTER COLUMN "articleId" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "user" ADD PRIMARY KEY ("userId");--> statement-breakpoint
ALTER TABLE "article" ADD COLUMN "userId" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "article" ADD CONSTRAINT "article_userId_user_userId_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("userId") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "article" ADD CONSTRAINT "article_articleId_article_articleId_fk" FOREIGN KEY ("articleId") REFERENCES "public"."article"("articleId") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "article" DROP COLUMN "author";--> statement-breakpoint
ALTER TABLE "article" DROP COLUMN "title";--> statement-breakpoint
ALTER TABLE "article" DROP COLUMN "description";--> statement-breakpoint
ALTER TABLE "article" DROP COLUMN "content";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");