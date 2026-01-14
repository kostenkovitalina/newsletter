import {integer, pgTable, serial, text} from "drizzle-orm/pg-core";

export const news = pgTable('article', {
    id: serial('articleId').primaryKey(),
    author: text('author').notNull(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    content: text('content').notNull(),
}) // add time zone, data

export const user = pgTable('user', {
    id: serial('userId').primaryKey(),
    // userName: text('userName').notNull(),
    // email: text('email').notNull().unique(),
    // passwordHash: text('password_hash').notNull(),
})

export const save_news = pgTable('article', {
    id: serial('articleId').primaryKey(),

    userId: text('userId').notNull().references(() => user.id, {onDelete: 'cascade'}),

    articleId: integer('articleId').notNull().references(() => news.id, {onDelete: 'cascade'}),
})

