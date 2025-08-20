'use client'
import React from 'react';
import {useSearch} from "@/hooks/useSearch";

export default function Page() {
    const {news, query} = useSearch();

    if (!news) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (news.length === 0) {
        return <p className="text-center mt-10">No results found "{query}".</p>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
            <h1 className="text-2xl font-bold">Search Results</h1>

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
        </div>
    );
}
