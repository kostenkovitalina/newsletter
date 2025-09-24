'use client'
import React from 'react';
import {Header} from "@/app/(marketing)/header/header";
import {NewsContainer} from "@/app/(components)/news-components/container/news-container";
import {NewsCards} from "@/app/(components)/news-components/news-cards/news-cards";
import {NewsPublisher} from "@/app/(components)/news-components/news-publisher/news-publisher";
import useTrendingHeadlineNews from "@/hooks/useTrendingHeadlineNews";

const Page = () => {
    const articles = useTrendingHeadlineNews()

    return (
        <div>
            <Header/>
            <div className="w-full h-full max-w-[1000px] -mt-[200px] mx-auto bg-white font-serif">
                <NewsContainer className="grid grid-cols-3 gap-3 p-6 justify-items-center">
                    {articles.map((article: any) => (
                        <NewsCards key={article.url} className="relative mb-5 w-full h-64 overflow-hidden shadow">
                            {article.urlToImage ? (
                                    <>
                                        <img
                                            src={article.urlToImage}
                                            alt=''
                                            className="w-full h-full object-cover"
                                            width={270}
                                            height={270}
                                        />
                                        <div
                                            className='absolute top-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3'>
                                            <h2 className="text-base font-semibold line-clamp-2">
                                                {article.title}
                                            </h2>
                                            <div className='flex flex-col gap-4'>
                                                <p className='text-xs'>{article.author}</p>
                                                <NewsPublisher publishedAt={article.publishedAt}/>
                                            </div>
                                        </div>
                                    </>
                                ) :
                                <div className="bg-[#F3F2EA] p-3 h-[340px]">
                                    <h2 className="text-xl font-semibold line-clamp-3">{article.title}</h2>
                                    <div className="flex gap-4 py-1.5">
                                        <p className="text-xs break-words">{article.author}</p>
                                        <NewsPublisher publishedAt={article.publishedAt}/>
                                    </div>
                                    <p className="text-[#04594D] text-xs line-clamp-3">
                                        {article.description}
                                    </p>
                                </div>
                            }
                        </NewsCards>
                    ))}
                </NewsContainer>
            </div>
        </div>
    );
};

export default Page;