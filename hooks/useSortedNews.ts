'use client'
import {useEffect, useReducer, useState} from "react";
import {Category} from "@/constants/categories";
import {ArticleType} from "@/type/article-type";
import {SortBy} from "@/constants/sortBy";
import {initialState, newsReducer} from "@/store/newsReducer";

const useSortedNews = (sortBy: SortBy = 'popularity', category: Category = 'general') => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [state, dispatch] = useReducer(newsReducer, initialState);

    useEffect(() => {
        const controller = new AbortController();

        const fetchSorted = async () => {
            dispatch({type: 'START'});
            try {
                const res = await fetch(`/api/news?category=${category}&sortBy=${sortBy}`, {signal: controller.signal});
                const data = await res.json();
                setArticles(data.articles || []);
                dispatch({type: 'SUCCESS'})
            } catch (err: any) {
                if (err.name !== 'AbortError') dispatch({type: 'ERROR', payload: err});
            } finally {
                dispatch({type: 'FINISHED'});
            }
        };

        fetchSorted();
        return () => controller.abort();
    }, [category, sortBy]);

    return {...state, articles};
};

export default useSortedNews;
