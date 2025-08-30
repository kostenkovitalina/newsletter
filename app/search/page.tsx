'use client'
import React from 'react';
import {useSearch} from "@/hooks/useSearch";
import {Pagination} from "@mui/material";
import {useRouter} from "next/navigation";
import {PaginationPage} from "@/app/(components)/pagination/pagitanion-page";

export default function Page() {
    const {news, query, loading, error} = useSearch();

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10">Error: {error}</p>
    if (news.length === 0) return <p className="text-center mt-10">No results found "{query}".</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
            <h1 className="text-2xl font-bold">Search Results</h1>
            <PaginationPage/>
            {news.map((article: any, index: number) => (
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
            <PaginationPage/>
        </div>
    );
}

