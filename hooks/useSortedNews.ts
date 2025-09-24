'use client'
import { useEffect, useState } from "react";
import { Category } from "@/constants/categories";
import { ArticleType } from "@/type/article-type";
import { SortBy } from "@/constants/sortBy";

const useSortedNews = (sortBy: SortBy = 'publishedAt', category: Category = 'general') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchSorted = async () => {
            try {
                const res = await fetch(`/api/news?category=${category}&sortBy=${sortBy}`, { signal: controller.signal });
                const data = await res.json();
                setArticles(data.articles || []);
            } catch (err: any) {
                if (err.name !== 'AbortError') console.error(err);
            }
        };

        fetchSorted();
        return () => controller.abort();
    }, [category, sortBy]);

    return articles;
};

export default useSortedNews;
