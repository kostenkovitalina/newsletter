import {createAsyncThunk} from '@reduxjs/toolkit'
import {ArticleType} from "@/type/article-type";

type SearchNewsArgs = {
    query: string,
    page: number,
}

type SearchNewsResponse = {
    articles: ArticleType[]
}

export const searchNews = createAsyncThunk<SearchNewsResponse, SearchNewsArgs>('news/searchNews',
    async ({query, page}, thunkAPI) => {
        const res = await fetch(`/api/news?query=${query}&page=${page}`)
        const data = await res.json()

        return {
            articles: data.articles,
        }
    }
)