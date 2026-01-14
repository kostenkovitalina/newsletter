import {createSlice} from "@reduxjs/toolkit";
import {ArticleType} from "@/type/article-type";
import {fetchNews} from "./news.thunks";
import {sortedNews} from "@/store/sorted.thunks";
import {searchNews} from "@/store/search.thunks";
import {fetchTrendingHeadlines} from "@/store/trendingHeadlineNews.thunks";

export interface NewsState {
    savedNews: ArticleType[],
    articles: ArticleType[],
    loading: boolean,
    error: string | null,
    page: number,
    query: string,
    totalResults: number,
}

const initialState: NewsState = {
    savedNews: typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem("savedNews") || "[]")
        : [],
    articles: [],
    loading: false,
    error: null,
    page: 1,
    query: '',
    totalResults: 0
}

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload
        },
        setQuery(state, action) {
            state.query = action.payload;
        },
        saveNews(state, action) {
            state.savedNews.push(action.payload);
        },
        removeSaveNews(state, action) {
            state.savedNews = state.savedNews.filter(item => item.url !== action.payload);
        },
        clearAllNews(state) {
            state.savedNews = []

            if (typeof window !== "undefined") {
                window.localStorage.removeItem("savedNews");
            }
        },
    },
    extraReducers: builder => {
        handleAsync(builder, fetchNews)
        handleAsync(builder, sortedNews)
        handleAsync(builder, searchNews)
        handleAsync(builder, fetchTrendingHeadlines)
    }
})

const handleAsync = (builder: any, thunk: any) => {
    builder
        .addCase(thunk.pending, (state: NewsState) => {
            state.loading = true
            state.error = null
        })
        .addCase(thunk.fulfilled, (state: NewsState, action: any) => {
            state.loading = false
            state.articles = action.payload.articles
        })
        .addCase(thunk.rejected, (state: NewsState, action: any) => {
            state.loading = false
            state.error = action.error.message ?? 'Error'
        })
}

export const newsActions = newsSlice.actions
export const newsReducer = newsSlice.reducer