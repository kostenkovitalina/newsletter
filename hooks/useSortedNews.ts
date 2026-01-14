'use client'
import {Category} from "@/constants/categories";
import {SortBy} from "@/constants/sortBy"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {useEffect} from "react";
import {sortedNews} from "@/store/sorted.thunks";

const useSortedNews = (sortBy: SortBy = 'popularity', category: Category = 'general') => {
    const dispatch = useDispatch<AppDispatch>()

    const {articles, loading, error} = useSelector((state: RootState) => state.news)

    useEffect(() => {
        dispatch(sortedNews({sortBy, category}))
    }, [dispatch, category, sortBy]);

    return {articles, loading, error}

}
export default useSortedNews
