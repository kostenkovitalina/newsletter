'use client'
import React, {useState} from 'react';
import {useSearch} from "@/hooks/useSearch";
import {Pagination} from "@mui/material";

export default function Page() {
    const {news, query, loading, error} = useSearch();
    const [currentPage, setCurrentPage] = useState(1)

    const pageSize = 20
    const totalResult = news.length
    const pageCount = Math.ceil(totalResult / pageSize)

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10">Error: {error}</p>
    if (news.length === 0) return <p className="text-center mt-10">No results found "{query}".</p>;

    const displayedNews = news.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    )

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
            <h1 className="text-2xl font-bold">Search Results</h1>

            {displayedNews.map((article: any, index: number) => (
                <div
                    key={index}
                    className="p-4 rounded-lg shadow bg-white"
                >
                    <h2 className="text-lg font-semibold">{article.title}</h2>
                    <p className="text-sm text-gray-600">{article.author}</p>
                    <p className="mt-2">{article.description}</p>
                    <a
                        href={article.url}
                        target="_blank"
                        className="text-blue-600 hover:underline mt-2 block"
                    >
                        Read more →
                    </a>
                </div>
            ))}

            <Pagination
                count={pageCount}
                color="primary"
                onChange={(event, page) => setCurrentPage(page)}
            />
        </div>
    );
}
