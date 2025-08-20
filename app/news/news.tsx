'use client'
import React from 'react';
import Image from "next/image";
import useNews from "@/hooks/useNews";
import {Props} from "@/type/categoty-type";
import {TrendingHeadlines} from "@/app/news/trending-headlines";

const News: React.FC<Props> = ({selectedCategory}: Props) => {
    const articles = useNews(selectedCategory)

    const firstTwoNews = articles.filter(article => article.urlToImage).slice(0, 2)

    return (
        <div className="w-full max-w-[1240px] mx-auto text-base font-serif flex flex-col">
            <div className='text-[33px]'>
                <h2>Latest News</h2>
                <hr/>
            </div>

            <div>
                <div className='flex w-full mx-auto gap-4'>
                    {firstTwoNews.map((article, index) => (
                        <div key={index} className="relative w-[390px] h-[340px]">
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 left-0 right-0 bg-opacity-60 text-white p-3">
                                <h3 className="text-base font-semibold line-clamp-2" style={{fontSize: 24}}>
                                    {article.title}
                                </h3>
                                <p style={{fontSize: 10, color: "white"}}>{article.author}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <ul>
                        {articles.map((article) => (
                            <li key={article.url}>
                                <strong>{article.title}</strong><br/>
                                <small>{article.source?.name}</small>
                                {article.urlToImage && (
                                    <Image
                                        src={article.urlToImage}
                                        width={100}
                                        height={100}
                                        alt={'news image'}
                                        unoptimized
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default News;
