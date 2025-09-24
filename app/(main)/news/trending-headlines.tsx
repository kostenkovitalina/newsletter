'use client'
import React, {useState} from 'react';
import {SortedType} from "@/type/sorted-type";
import useTrendingHeadlineNews from "@/hooks/useTrendingHeadlineNews";
import Link from 'next/link';
import {ArticleType} from "@/type/article-type";
import {NewsModal} from "@/app/(components)/news-components/news-modal/news-modal";
import {NewsList} from "@/app/(components)/news-components/news-list/news-list";

export const TrendingHeadlines: React.FC<SortedType> = ({sortBy}) => {
    const articles = useTrendingHeadlineNews(sortBy)

    const [selectedArticle, setSelectedArticle] = useState<ArticleType | null>(null)

    const ContentLargeScreen = () => (
        <div className='w-[410px] mx-auto bg-white mt-[50px] flex flex-col font-serif'>
            <div className='flex flex-col px-6'>
                <div className='flex justify-between items-center mb-4 mt-4'>
                    <h2 className='text-xl'>Trending Headlines</h2>
                    <Link href={`/trending-headline`}>
                        <button className='h-6 w-20 bg-[#1A1A1A] text-white rounded'>View all</button>
                    </Link>
                </div>
            </div>

            <NewsList articles={articles} layout='list'/>
            {selectedArticle && (
                <NewsModal article={selectedArticle} onClose={() => setSelectedArticle(null)}/>
            )}
        </div>
    )

    const ContentSmallScreen = () => (
        <>
            <NewsList articles={articles} layout='grid'/>
            {selectedArticle && (
                <NewsModal article={selectedArticle} onClose={() => setSelectedArticle(null)}/>
            )}
        </>
    )

    return (
        <>
            <div className='hidden md:block'>
                <ContentLargeScreen/>
            </div>

            <div className='block md:hidden'>
                <ContentSmallScreen/>
            </div>
        </>
    );
};

