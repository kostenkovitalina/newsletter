'use client'
import {SortBy} from "@/constants/sortBy";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {useEffect} from "react";
import {fetchTrendingHeadlines} from "@/store/trendingHeadlineNews.thunks";

const useTrendingHeadlineNews = (sortBy: SortBy = 'publishedAt') => {
    const dispatch = useDispatch<AppDispatch>()

    const {articles, loading, error} = useSelector((state: RootState) => state.news)

    useEffect(() => {
        dispatch(fetchTrendingHeadlines({sortBy}))
    }, [dispatch, sortBy])

    return {articles, loading, error}
}

export default useTrendingHeadlineNews;
