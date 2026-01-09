import {createSelector, createSlice} from "@reduxjs/toolkit";
import {ArticleType} from "@/type/article-type";
import {getItem} from "@/utils/localStorage";
import {RootState} from "@/store/index";

export interface NewsState {
    savedNews: ArticleType[],
    addNews: ArticleType[]
}

const initialState: NewsState = {
    savedNews: typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem("savedNews") || "[]")
        : [],
    addNews: []
}

const newsSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        addNews(state, action) {
            state.addNews.push(action.payload)
        },
        removeNews(state, action) {
            state.addNews = state.addNews.filter(item => item.id !== action.payload)
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
        }
    }
})

export const newsActions = newsSlice.actions
export const newsReducer = newsSlice.reducer