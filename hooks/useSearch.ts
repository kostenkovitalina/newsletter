'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArticleType } from '@/type/article-type';

export const useSearch = () => {
    const [news, setNews] = useState<ArticleType[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalResult, setTotalResult] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const searchParams = useSearchParams();
    const NEWS_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    useEffect(() => {
        if (typeof window === 'undefined') return;

        setQuery(searchParams.get('query') || '');
        setPage(Number(searchParams.get('page') || '1'));
    }, [searchParams]);

    useEffect(() => {
        if (!query) {
            setNews([]);
            setTotalResult(0);
            return;
        }

        const controller = new AbortController();

        const searchNews = async () => {
            try {
                setLoading(true);
                setError(null);

                const url = `https://newsapi.org/v2/everything?q=${query}&page=${page}&search=title,content&apiKey=${NEWS_API_KEY}`;
                const res = await fetch(url, { signal: controller.signal });
                const data = await res.json();

                setNews(data.articles || []);
                setTotalResult(data.totalResults || 0);

                if (!res.ok || data.status === 'error') {
                    setError(data.message || 'Error fetching data');
                }
            } catch (err: any) {
                if (err.name === 'AbortError') return;
                setError(err.message);
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        searchNews();

        return () => controller.abort();
    }, [query, page, NEWS_API_KEY]);

    return { news, query, loading, error, page, totalResult };
};

