import {createAsyncThunk} from "@reduxjs/toolkit";
import {ArticleType} from "@/type/article-type";
import {SortBy} from "@/constants/sortBy";

type FetchNewsArgs = {
    sortBy: SortBy
}

type FetchNewsResponse = {
    articles: ArticleType[]
}

export const fetchTrendingHeadlines
    = createAsyncThunk<FetchNewsResponse, FetchNewsArgs>('news/fetchTrendingHeadlines',
    async ({sortBy}, thunkAPI) => {
        const res = await fetch(`/api/news?query=bitcoin&sortBy=${sortBy}`)
        const data = await res.json()

        return {
            articles: data.articles,
        }
    }
)