'use client'
import { useEffect, useState } from "react";
import { Category } from "@/constants/categories";
import { ArticleType } from "@/type/article-type";

const useNews = (category: Category = 'general') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchNews = async () => {
            try {
                const res = await fetch(`/api/news?category=${category}`, { signal: controller.signal });
                const data = await res.json();
                setArticles(data.articles || []);
            } catch (err: any) {
                if (err.name === 'AbortError') return;
                console.error('Fetch error:', err);
            }
        };

        fetchNews();

        return () => controller.abort();
    }, [category]);

    return articles;
}

export default useNews;
