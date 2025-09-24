'use client'
import { useEffect, useState } from "react";
import { ArticleType } from "@/type/article-type";
import { SortBy } from "@/constants/sortBy";

const useTrendingHeadlineNews = (sortBy: SortBy = 'publishedAt') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchNews = async () => {
            try {
                const res = await fetch(`/api/news?query=bitcoin&sortBy=${sortBy}`, { signal: controller.signal });
                const data = await res.json();
                setArticles(data.articles || []);
            } catch (err: any) {
                if (err.name !== 'AbortError') console.error(err);
            }
        };

        fetchNews();
        return () => controller.abort();
    }, [sortBy]);

    return articles;
};

export default useTrendingHeadlineNews;
