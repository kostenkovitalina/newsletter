import { Category } from '@/constants/categories'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {ArticleType} from "@/type/article-type";

type FetchNewsArgs = {
    category: Category,
    page: number
}

type FetchNewsResponse = {
    articles: ArticleType[]
}

export const fetchNews = createAsyncThunk<FetchNewsResponse, FetchNewsArgs>(
    'news/fetchNews',
    async ({ category, page }, thunkAPI) => {
        const res = await fetch(`/api/news?category=${category}&page=${page}`)
        const data = await res.json()

        return {
            articles: data.articles,
        }
    }
)
