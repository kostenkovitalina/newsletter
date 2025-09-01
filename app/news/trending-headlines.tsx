import React from 'react';
import {SortByType} from "@/type/sortBy-type";
import useSortByNews from "@/hooks/useSortByNews";
import {NewsPublisher} from "@/app/(components)/news-publisher/news-publisher";

export const TrendingHeadlines: React.FC<SortByType> = ({sortBy}) => {
    const articles = useSortByNews(sortBy)

    const articlesToShow =  articles.filter(article => article.urlToImage).slice(0, 30)

    return (
        <div className='w-[410px] mx-auto bg-white mt-[50px] flex flex-col font-serif'>
            <div className='flex flex-col px-6'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl'>Trending Headlines</h2>
                    <button className='bg-red-500 text-white px-4 py-2 rounded mt-4'>View all</button>
                </div>
            </div>

            <div className='flex flex-col gap-4 px-6'>
                {articlesToShow.map((article, index) => (
                    <div key={index} className='flex'>
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
                                <NewsPublisher publishedAt={article.publishedAt}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

