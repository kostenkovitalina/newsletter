'use client'
import {Category} from "@/constants/categories";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchNews} from "@/store/news.thunks";
import {useEffect} from "react";

const useNews = (category: Category = 'general') => {
    const dispatch = useDispatch<AppDispatch>()

    const {articles, loading, error, page, savedNews} = useSelector((state: RootState) => state.news)

    useEffect(() => {
        dispatch(fetchNews({category, page}))
    }, [dispatch, page, category])

    return {
        articles,
        loading,
        error,
        page,
        savedNews,
    }
}

export default useNews;
