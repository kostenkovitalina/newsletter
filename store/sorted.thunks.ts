import {createAsyncThunk} from "@reduxjs/toolkit";
import {SortBy} from "@/constants/sortBy";
import {ArticleType} from "@/type/article-type";
import {Category} from "@/constants/categories";

type SortedNewsArgs = {
    category: Category,
    sortBy: SortBy,
}

type SortedNewsResponse = {
    articles: ArticleType[];
}

export const sortedNews = createAsyncThunk<SortedNewsResponse, SortedNewsArgs>('news/sortedNews',
    async ({category, sortBy}, thunkAPI) => {
        const res = await fetch(`/api/news?category=${category}&sortBy=${sortBy}`)
        const data = await res.json()

        return {
            articles: data.articles,
        }
    }
)