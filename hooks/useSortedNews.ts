/* global URL */
'use client'
import { useEffect, useState } from "react";
import { Category } from "@/constants/categories";
import { ArticleType } from "@/type/article-type";
import { SortBy } from "@/constants/sortBy";

const useSortedNews = (sortBy: SortBy = 'publishedAt', category: Category = 'general') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const NEWS_API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

    useEffect(() => {
        const controller = new AbortController();

        const run = async () => {
            try {
                const srcUrl = new URL(`https://newsapi.org/v2/top-headlines/sources?apiKey=${NEWS_API_KEY}`);
                if (category) srcUrl.searchParams.set('category', category);

                const srcRes = await fetch(srcUrl, { signal: controller.signal });
                const srcJson = await srcRes.json();
                const ids: string[] = (srcJson?.sources || [])
                    .map((s: any) => s.id)
                    .filter(Boolean);

                if (!ids.length) {
                    setArticles([]);
                    return;
                }

                const idsCsv = ids.slice(0, 20).join(',');

                const evUrl = new URL(`https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}&sources=${idsCsv}&sortBy=${sortBy}&pageSize=100`);

                const evRes = await fetch(evUrl, { signal: controller.signal });
                const evJson = await evRes.json();
                const list: ArticleType[] = evJson?.articles || [];

                const unique = Array.from(new Map(list.map(a => [a.url, a])).values());

                const final = sortBy === 'publishedAt'
                    ? unique.sort((a, b) =>
                        new Date(b.publishedAt ?? 0).getTime() -
                        new Date(a.publishedAt ?? 0).getTime()
                    )
                    : unique;

                setArticles(final);
            } catch (err: any) {
                if (err.name !== 'AbortError') console.error('Fetch error:', err);
            }
        };

        run();
        return () => controller.abort();
    }, [sortBy, category, NEWS_API_KEY]);

    return articles;
};

export default useSortedNews;
