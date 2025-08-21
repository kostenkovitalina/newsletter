'use client'
import {useEffect, useState} from "react";
import {Category} from "@/constanta/categories";

export type Article = {
    source?: {
        id: number,
        name: string;
    };
    author: string;
    title: string;
    url: string;
    description?: string;
    urlToImage: string;
    content?: string;
    publishedAt?: string
};

const useNews = (category: Category = 'general') => {
    const [articles, setArticles] = useState<Article[]>([]);

    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const controller = new AbortController();
        const fetchNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

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