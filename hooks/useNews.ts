'use client'
import {Category} from "@/constants/categories";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {fetchNews} from "@/store/news.thunks";
import {useEffect} from "react";

const useNews = (category: Category = 'general') => {
    const dispatch = useDispatch<AppDispatch>()

    const {page, savedNews, loading, error} = useSelector((state: RootState) => state.news)

    const articles = useSelector((state: RootState) => state.news.generalNews)
    // const loading = useSelector((state: RootState) => state.news.loading)
    // const error = useSelector((state: RootState) => state.news.error)

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
