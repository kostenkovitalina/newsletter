import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ArticleType} from "@/type/article-type";
import {fetchNews} from "./news.thunks";
import {sortedNews} from "@/store/sorted.thunks";
import {searchNews} from "@/store/search.thunks";
import {fetchTrendingHeadlines} from "@/store/trendingHeadlineNews.thunks";

export interface NewsState {
    savedNews: ArticleType[];

    articles: ArticleType[];
    generalNews: ArticleType[];
    trendingNews: ArticleType[];
    sortedNews: ArticleType[];
    searchResults: ArticleType[];

    loading: boolean;
    error: string | null;
    page: number;
    query: string;
    totalResults: number;
}

const initialState: NewsState = {
    savedNews: [],

    articles: [],
    generalNews: [],
    trendingNews: [],
    sortedNews: [],
    searchResults: [],

    loading: false,
    error: null,
    page: 1,
    query: '',
    totalResults: 0
};

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        saveNews(state, action: PayloadAction<ArticleType>) {
            const exists = state.savedNews.find(item => item.url === action.payload.url);
            if (!exists) {
                state.savedNews.push(action.payload);
            }
        },
        removeSaveNews(state, action: PayloadAction<string>) {
            state.savedNews = state.savedNews.filter(item => item.url !== action.payload);
        },
        clearAllNews(state) {
            state.savedNews = [];
            if (typeof window !== "undefined") {
                window.localStorage.removeItem("savedNews");
            }
        },
    },
    extraReducers: builder => {
        builder
            // --- Fetch General News ---
            .addCase(fetchNews.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.generalNews = action.payload.articles;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch news';
            })

            // --- Fetch Trending ---
            .addCase(fetchTrendingHeadlines.fulfilled, (state, action) => {
                state.trendingNews = action.payload.articles;
            })

            // --- Sorted News ---
            .addCase(sortedNews.fulfilled, (state, action) => {
                state.sortedNews = action.payload.articles;
            })

            // --- Search News  ---
            .addCase(searchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResults = action.payload.articles;

                state.totalResults = action.payload.totalResults;
            })
            .addCase(searchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error searching news';
                state.searchResults = [];
            });
    }
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;