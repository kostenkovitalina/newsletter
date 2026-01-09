'use client'
import React from 'react';
import {Header} from "@/app/(marketing)/header/header";
import {NewsContainer} from "@/app/(components)/news-components/container/news-container";
import {NewsCards} from "@/app/(components)/news-components/news-cards/news-cards";
import {NewsPublisher} from "@/app/(components)/news-components/news-publisher/news-publisher";
import useTrendingHeadlineNews from "@/hooks/useTrendingHeadlineNews";
import {NewsList} from "@/app/(components)/news-components/news-list/news-list";
import {Loading} from "@/app/(components)/loading/loading";

const Page = () => {
    const {articles, loading} = useTrendingHeadlineNews()

    if (loading) return <Loading/>

    return (
        <div>
            <Header/>
            <div className="w-full h-full max-w-[1000px] -mt-[200px] mx-auto bg-white font-serif">
                <NewsList articles={articles} layout='grid' col={3}/>
            </div>
        </div>
    );
};

export default Page;