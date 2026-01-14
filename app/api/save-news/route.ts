import {db} from "@/db/db";
import {save_news} from "@/db/schema";
import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs/server";

export async function POST(req: Request) {
    const {userId} = await auth()

    if (!userId) {
        return NextResponse.json(
            {error: 'Unauthorized'},
            {status: 401}
        )
    }

    const {articleId} = await req.json()

    await db.insert(save_news).values({
        userId,
        articleId,
    })

    return NextResponse.json({success: true})
}