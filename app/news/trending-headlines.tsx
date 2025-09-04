import React from 'react';
import {SortedType} from "@/type/sorted-type";
import {NewsPublisher} from "@/app/(components)/news-publisher/news-publisher";
import useTrendingHeadlineNews from "@/hooks/useTrendingHeadlineNews";
import Link from 'next/link';

export const TrendingHeadlines: React.FC<SortedType> = ({sortBy}) => {
    const articles = useTrendingHeadlineNews(sortBy)

    const articlesToShow =  articles.filter(article => article.urlToImage).slice(0, 30)

    return (
        <div className='w-[410px] mx-auto bg-white mt-[50px] flex flex-col font-serif'>
            <div className='flex flex-col px-6'>
                <div className='flex justify-between items-center mb-4 mt-4'>
                    <h2 className='text-xl'>Trending Headlines</h2>
                    <Link href={`/trending-headline`}>
                        <button className='h-6 w-20 bg-[#1A1A1A] text-white rounded'>View all</button>
                    </Link>
                </div>
            </div>

            <div className='flex flex-col gap-4 px-6'>
                {articlesToShow.map((article, index) => (
                    <div key={index} className='flex mb-4'>
                        <img
                            src={article.urlToImage}
                            alt='news image'
                            width={140}
                            height={120}
                        />
                        <div className='pl-1.5'>
                            <h3 className='text-sm text-[#04594D]'>{article.title}</h3>
                            <div className='flex text-xs gap-4'>
                                <p>{article.author}</p>
                                <NewsPublisher
                                    className='text-gray-400'
                                    publishedAt={article.publishedAt}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

