'use client'
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {searchNews} from "@/store/search.thunks";
import {newsActions} from "@/store/news.slice";

export const useSearch = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {loading, error, page, query, articles, totalResults} = useSelector((state: RootState) => state.news)

    const searchParams = useSearchParams();

    useEffect(() => {
        const queryParam = searchParams.get('query') || '';
        const pageParam = Number(searchParams.get('page') || '1');

        dispatch(newsActions.setQuery(queryParam));
        dispatch(newsActions.setPage(pageParam));
    }, [searchParams, dispatch]);

    useEffect(() => {
        if (query) {
            dispatch(searchNews({ query, page }));
        }
    }, [query, page, dispatch]);


    return { articles, loading, error, query, page, totalResults }
};