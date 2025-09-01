'use client'
import {useEffect, useState} from "react";
import {Category} from "@/constants/categories";
import {ArticleType} from "@/type/article-type";
import {SortBy} from "@/constants/sortBy";

const useSortByNews = (sortBy: SortBy = 'publishedAt') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);

    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const controller = new AbortController();
        const fetchNews = async () => {
            const url = `https://newsapi.org/v2/everything?q=bitcoin&sortBy=${sortBy}&apiKey=${apiKey}`;

            try {
                const res = await fetch(url, {signal: controller.signal});
                const data = await res.json();
                setArticles(data.articles || []);
            } catch (err: any) {
                if (err.name === 'AbortError') return;
                console.error('Fetch error:', err);
            }
        };

        fetchNews();

        return () => {
            controller.abort();
        };
    }, [sortBy]);

    return articles
}

export default useSortByNews