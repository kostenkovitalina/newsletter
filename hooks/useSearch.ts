'use client'
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { searchNews } from "@/store/search.thunks";
import { newsActions } from "@/store/news.slice";

export const useSearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const searchParams = useSearchParams();

    const { searchResults, loading, error, totalResults } = useSelector((state: RootState) => state.news);

    const urlQuery = searchParams.get('query') || '';
    const urlPage = Number(searchParams.get('page') || '1');

    useEffect(() => {
        dispatch(newsActions.setQuery(urlQuery));
        dispatch(newsActions.setPage(urlPage));

        if (urlQuery) {
            dispatch(searchNews({ query: urlQuery, page: urlPage }));
        }
    }, [urlQuery, urlPage, dispatch])

    return {
        articles: searchResults,
        loading,
        error,
        query: urlQuery,
        page: urlPage,
        totalResults
    };
};