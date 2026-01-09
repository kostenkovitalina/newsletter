'use client'
import {useEffect, useReducer, useState} from "react";
import {ArticleType} from "@/type/article-type";
import {initialState, newsReducer} from "@/store/newsReducer";
import {useSearchParams} from "next/navigation";

export const useSearch = () => {
    const [news, setNews] = useState<ArticleType[]>([]);
    const [totalResult, setTotalResult] = useState(0);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const [state, dispatch] = useReducer(newsReducer, initialState);
    const searchParams = useSearchParams();

    useEffect(() => {
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
            dispatch({type: 'START'});
            try {
                const res = await fetch(`/api/news?query=${query}&page=${page}`, {signal: controller.signal});
                const data = await res.json();
                setNews(data.articles || []);
                setTotalResult(data.totalResults || 0);
                if (!res.ok || data.status === 'error') {
                    dispatch({type: 'ERROR', payload: data.message || 'Error fetching data'});
                }
                dispatch({type: 'SUCCESS'})
            } catch (err: any) {
                if (err.name !== 'AbortError') dispatch({type: 'ERROR', payload: err});
            } finally {
                dispatch({type: 'FINISHED'});
            }
        };

        searchNews();
        return () => controller.abort();
    }, [query, page]);

    return {...state, news, query, page, totalResult};
};