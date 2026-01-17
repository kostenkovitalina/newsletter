import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchNews = createAsyncThunk(
    'news/searchNews',
    async ({ query, page }: { query: string; page: number }, { rejectWithValue }) => {
        try {
            const res = await fetch(`/api/news?query=${query}&page=${page}`);
            const data = await res.json();

            if (!res.ok) {
                return rejectWithValue(data.message);
            }

            return {
                articles: data.articles || [],
                totalResults: data.totalResults || 0,
            };
        } catch (error) {
            return rejectWithValue('Failed to fetch news');
        }
    }
);