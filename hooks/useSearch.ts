'use client'
import {useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {ArticleType} from "@/type/article-type";


export const useSearch = () => {
    const [news, setNews] = useState<ArticleType[]>([]);
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false)
    const [totalResult, setTotalResult] = useState(0)

    const [error, setError] = useState(null)
    const query = searchParams.get("query") || "";
    const page = searchParams.get('page') || 1

    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    useEffect(() => {
        const controller = new AbortController();

        if (!query) {
            setNews([]);
            setTotalResult(0)
            return;
        }

        const searchNews = async () => {
            const url = `https://newsapi.org/v2/everything?q=${query}&page=${page}&search=title,content&apiKey=${apiKey}`;

            try {
                setLoading(true)

                const res = await fetch(url, {signal: controller.signal});
                const data = await res.json();
                setNews(data.articles || []);
                setTotalResult(data.totalResults  || 0)

                if(!res.ok || data.status === 'error'){
                    // throw new Error(data.message)
                    setError(data.message)
                }

                console.log('Data',data)
            } catch (err: any) {
                if (err.name === 'AbortError') return;
                setError(err.message)
                console.error('Fetch error:', err);
            } finally {
                setLoading(false)
            }
        }
        searchNews()

        return () => {
            controller.abort();
        };

    }, [query, page]);

    return {news, query, loading, error, page, totalResult}
};

//Todo: add useState totalResult and in if/else add setTotalResult 0 || data.totalResult ||. and in if(!query) add setTotalResult 0