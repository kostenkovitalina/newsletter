'use client'

import React from 'react';
import {useSearch} from '@/hooks/useSearch';
import {Header} from '@/app/(marketing)/header/header';
import {PaginationPage} from '@/app/(components)/pagination/pagitanion-page';
import {NewsCards} from '@/app/(components)/news-components/news-cards/news-cards';
import {NewsContainer} from '@/app/(components)/news-components/container/news-container';
import {NewsPublisher} from '@/app/(components)/news-components/news-publisher/news-publisher';
import {Loading} from "@/app/(components)/loading/loading";
import {NewsList} from "@/app/(components)/news-components/news-list/news-list";

const Page = () => {
    const {news, query, loading, error, page, totalResult} = useSearch();

    if (loading) return <Loading/>
    if (error) return <p className="text-center mt-10">Error: {error}</p>;
    if (news.length === 0) return <p className="text-center mt-10">No results found "{query}".</p>;

    return (
        <>
            <Header/>
            <div className="w-full max-w-[1000px] mx-auto bg-white font-serif -mt-[200px]">
                <h1 className="text-2xl pt-10 pl-6">Search Results '{query}'</h1>

                <div className='justify-items-center p-5'>
                    <PaginationPage page={page} query={query} totalResults={totalResult} />
                </div>

                <NewsList articles={news} layout='grid' col={3}/>

                <div className='justify-items-center p-5'>
                    <PaginationPage page={page} totalResults={totalResult} query={query}/>
                </div>
            </div>
        </>
    );
};

export default Page;
