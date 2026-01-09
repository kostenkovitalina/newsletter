'use client'
import {useEffect, useReducer, useState} from "react";
import {Category} from "@/constants/categories";
import {ArticleType} from "@/type/article-type";
import {initialState, newsReducer} from "@/store/newsReducer";

const useNews = (category: Category = 'general') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [state, dispatch] = useReducer(newsReducer, initialState);

    useEffect(() => {
        const controller = new AbortController();

        const fetchNews = async () => {
            dispatch({type: 'START'});
            try {
                const res = await fetch(`/api/news?category=${category}`, {signal: controller.signal});
                const data = await res.json();
                setArticles(data.articles || []);
                dispatch({type: 'SUCCESS', payload: {totalResult: data.totalResults || data.articles.length}})

            } catch (err: any) {
                if (err.name !== 'AbortError') dispatch({type: 'ERROR', payload: err});
            } finally {
                dispatch({type: 'FINISHED'});
            }
        };

        fetchNews();

        return () => controller.abort();
    }, [category]);

    return {...state, articles, dispatch};
}

export default useNews;
