'use client'
import React from 'react';
import useNews from "@/hooks/useNews";
import {CategoryType} from "@/type/category-type";
import {NewsCards} from "@/app/(components)/news-cards/news-cards";
import {NewsPublisher} from "@/app/(components)/news-publisher/news-publisher";

const News: React.FC<CategoryType> = ({selectedCategory}) => {
    const articles = useNews(selectedCategory);

    return (
        <>
            <div className="w-full max-w-[1240px] mx-auto text-base font-serif mt-6 flex flex-col">
                <div className='text-[33px]'>
                    <h2>Latest News</h2>
                </div>
                <div className='p-2'>
                    <hr/>
                </div>
                <div className="flex gap-8 mt-[20px]">
                    <div className="flex-[3] min-w-0">
                        <div className='grid grid-cols-2 gap-4'>
                            {articles.map((article, index) => (
                                <NewsCards key={index} className="relative w-[390px] h-[340px]">
                                    {article.urlToImage ? (
                                            <>
                                                <img
                                                    src={article.urlToImage}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover"
                                                />

                                                <div className="absolute top-0 left-0 right-0 bg-opacity-60 text-white p-3">
                                                    <h3 className="text-base font-semibold line-clamp-2"
                                                        style={{fontSize: 24}}>
                                                        {article.title}
                                                    </h3>
                                                    <div className='flex gap-4'>
                                                        <p style={{fontSize: 10, color: "white"}}>{article.author}</p>
                                                        <NewsPublisher publishedAt={article.publishedAt}/>
                                                    </div>
                                                </div>
                                            </>

                                        ) :
                                        <NewsCards className='absolute bg-white font-semibold p-2'>
                                            <h2 className='text-xl'>{article.title}</h2>
                                            <div className='flex gap-4'>
                                                <p className='text-xs'>{article.author}</p>
                                                <NewsPublisher publishedAt={article.publishedAt}/>
                                            </div>
                                            <br/>
                                            <p className='text-blue-600 text-base'>{article.description}</p>
                                        </NewsCards>
                                    }
                                </NewsCards>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default News;
