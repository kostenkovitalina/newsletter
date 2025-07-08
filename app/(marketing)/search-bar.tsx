'use client'
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import useNews from "@/hooks/useNews";

export const SearchBar = () => {
    const articles = useNews();

    const [input, setInput] = useState('')
    // const [filteredArticles, setFilteredArticles] = useState(articles)
    // const router = useRouter()
    //
    // const handleSearch = () => {
    //     if (input.trim()) {
    //         router.push(`/news/${input.trim()}`);
    //     }
    // }

    // const handleSearch = () => {
    //     const result = articles.filter(item =>
    //         item.title.toLowerCase().includes(input.toLowerCase()) ||
    //         item.content?.toLowerCase().includes(input.toLowerCase())
    //     )
    //     setFilteredArticles(result)
    // }

    return (
        <div className="w-full max-w-[630px] w-auto flex items-center">
            <input
                className='flex-grow min-w-[50px] h-[50px] px-4 border-none
                bg-[#04594D] text-[#F7F7F4] outline-none'
                type="search"
                placeholder="Search for headlines"
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="w-[116px] h-[50px] pl-4 pr-4 font-extrabold uppercase
                text-white bg-[#8E4042] border-none cursor-pointer"
                onClick={() => {}}
            >
                Search
            </button>
        </div>
    );
};

