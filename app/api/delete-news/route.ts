import { db } from "@/db/db";
import { NextResponse } from "next/server";
import {save_news} from "@/db/schema";
import { and, eq } from "drizzle-orm";

export async function DELETE(req: Request) {
    const { userId, articleId } = await req.json();

    await db
        .delete(save_news)
        .where(
            and(
                eq(save_news.userId, userId),
                eq(save_news.articleId, articleId)
            )
        );

    return NextResponse.json({ success: true });
}