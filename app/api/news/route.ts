import { ArticleType } from '@/type/article-type';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const category = req.nextUrl.searchParams.get('category') || '';
    const query = req.nextUrl.searchParams.get('query') || '';
    const sortBy = (req.nextUrl.searchParams.get("sortBy") || "publishedAt") as "publishedAt" | "relevancy" | "popularity";
    const page = req.nextUrl.searchParams.get('page') || '1';

    const NEWS_API_KEY = process.env.NEWS_API_KEY;

    try {
        let articles: ArticleType[] = [];
        let totalResults = 0;
        let data: any;

        if (query) {
            // Пошук
            const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=${sortBy}&page=${page}&pageSize=20&apiKey=${NEWS_API_KEY}`;
            const res = await fetch(url);
            data = await res.json();
            articles = data.articles || [];
            totalResults = data.totalResults || articles.length;
        } else if (category) {
            // Джерела за категорією
            const srcUrl = `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${NEWS_API_KEY}`;
            const srcRes = await fetch(srcUrl);
            const srcJson = await srcRes.json();
            const ids: string[] = (srcJson?.sources || []).map((s: any) => s.id).filter(Boolean);

            if (ids.length) {
                const idsCsv = ids.slice(0, 20).join(',');
                const evUrl = `https://newsapi.org/v2/everything?sources=${idsCsv}&sortBy=${sortBy}&pageSize=100&apiKey=${NEWS_API_KEY}`;
                const evRes = await fetch(evUrl);
                const evJson = await evRes.json();
                const list: ArticleType[] = evJson?.articles || [];

                const unique = Array.from(new Map(list.map(a => [a.url, a])).values());

                articles = sortBy === 'publishedAt'
                    ? unique.sort((a, b) =>
                        new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime()
                    )
                    : unique;

                totalResults = evJson.totalResults || articles.length;
            }
        } else {
            // За замовчуванням
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=20&apiKey=${NEWS_API_KEY}`;
            const res = await fetch(url);
            data = await res.json();
            articles = data.articles || [];
            totalResults = data.totalResults || articles.length;
        }

        return NextResponse.json({ articles, totalResults });
    } catch (error: any) {
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    }
}
