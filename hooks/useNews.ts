'use client'
import {useEffect, useState} from "react";
import {Category} from "@/constants/categories";
import {ArticleType} from "@/type/article-type";

const useNews = (category: Category = 'general') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);

    const NEWS_API_KEY = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const controller = new AbortController();
        const fetchNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`;

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
    }, [category]);

    return articles
}

export default useNews