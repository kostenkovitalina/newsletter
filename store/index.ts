import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "@/store/auth-slice";
import {newsReducer} from "@/store/news-slice";
import {setItem} from "@/utils/localStorage";

const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer
    }
})

// store.subscribe(() => {
//     const state = store.getState();
//     setItem("savedNews", state.news.savedNews);
// });

export type RootState = ReturnType<typeof store.getState>;

export default store;