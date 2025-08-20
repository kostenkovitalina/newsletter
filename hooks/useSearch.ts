'use client'
import {useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";

type Article = {
    title: string;
    author?: string;
    description?: string;
    url: string;
};

export const useSearch = () => {
    const [news, setNews] = useState<Article[]>([]);
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const controller = new AbortController();

        if (!query) {
            setNews([]);
            return;
        }

        const searchNews = async () => {
            const url = `https://newsapi.org/v2/everything?q=${query}&search=title,content&apiKey=${apiKey}`;

            try {
                const res = await fetch(url, {signal: controller.signal});
                const data = await res.json();
                setNews(data.articles || []);
            } catch (err: any) {
                if (err.name === 'AbortError') return;
                console.error('Fetch error:', err);
            }
        }
        searchNews()

        return () => {
            controller.abort();
        };

    }, [query]);

    return {news, query}
};

