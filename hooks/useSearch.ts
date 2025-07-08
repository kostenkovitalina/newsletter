'use client'
import {useEffect, useState} from 'react';
import {useParams} from "next/navigation";

export const useSearch = () => {
    const [news, setNews] = useState(null)
    const {search} = useParams()

    useEffect(() => {
        const searchNews = async () => {
            const url = `https://newsapi.org/v2/everything?q=${search}&search=title,content&apiKey=1dc9657cac0249d982d008ed288ede97`

            try {
                const res = await fetch(url);
                const data = await res.json();
                setNews(data.articles || []);
            } catch (err) {
                console.error('Fetch error:', err);
            }
        }
        searchNews()
    }, [search]);

    return {news}
};

