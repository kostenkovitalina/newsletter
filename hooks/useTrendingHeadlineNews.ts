'use client'
import {useEffect, useReducer, useState} from "react";
import {ArticleType} from "@/type/article-type";
import {SortBy} from "@/constants/sortBy";
import {initialState, newsReducer} from "@/store/newsReducer";

const useTrendingHeadlineNews = (sortBy: SortBy = 'publishedAt') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [state, dispatch] = useReducer(newsReducer, initialState);

    useEffect(() => {
        const controller = new AbortController();

        const fetchNews = async () => {
            dispatch({type: 'START'});
            try {
                const res = await fetch(`/api/news?query=bitcoin&sortBy=${sortBy}`, {signal: controller.signal});
                const data = await res.json();
                setArticles(data.articles || []);
                dispatch({type: 'SUCCESS'})
            } catch (err: any) {
                if (err.name !== 'AbortError') dispatch({type: 'ERROR', payload: err});
            } finally {
                dispatch({type: 'FINISHED'});
            }
        };

        fetchNews();
        return () => controller.abort();
    }, [sortBy]);

    return {...state, articles};
};

export default useTrendingHeadlineNews;
