'use client'
import React, {useState} from 'react';
import useNews from "@/hooks/useNews";
import {CategoryType} from "@/type/category-type";
import {NewsCards} from "@/app/(components)/news-cards/news-cards";
import {NewsPublisher} from "@/app/(components)/news-publisher/news-publisher";
import {ArticleType} from '@/type/article-type';

const News: React.FC<CategoryType> = ({selectedCategory}) => {
    const articles = useNews(selectedCategory)

    const [selectedArticle, setSelectedArticle] = useState<ArticleType | null>(null)

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

                                                <div
                                                    className="absolute top-0 left-0 right-0 hover:bg-black hover:bg-opacity-60 text-white p-3">
                                                    <button
                                                        key={index}
                                                        onClick={() => setSelectedArticle(article)}
                                                    >
                                                        <h3 className="text-base font-semibold line-clamp-2"
                                                            style={{fontSize: 24}}
                                                        >
                                                            {article.title}
                                                        </h3>
                                                    </button>
                                                    <div className='flex gap-4'>
                                                        <p style={{fontSize: 10, color: "white"}}>{article.author}</p>
                                                        <NewsPublisher publishedAt={article.publishedAt}/>
                                                    </div>
                                                </div>
                                            </>

                                        ) :
                                        <div className='bg-white font-semibold p-2 h-[340px]'>
                                            <button
                                                key={index}
                                                onClick={() => setSelectedArticle(article)}
                                            ><h2 className='text-xl'>{article.title}</h2>
                                            </button>
                                            <div className='flex gap-4'>
                                                <p className='text-xs'>{article.author}</p>
                                                <NewsPublisher publishedAt={article.publishedAt}/>
                                            </div>
                                            <p className='text-blue-600 text-base'>{article.description}</p>
                                        </div>
                                    }
                                </NewsCards>
                            ))}

                            {selectedArticle && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y:auto">
                                    <div className="bg-white p-4 max-w-xl w-full h-auto relative">
                                        <button
                                            className="absolute top-2 right-2 text-xl font-bold"
                                            onClick={() => setSelectedArticle(null)}
                                        >
                                            ×
                                        </button>

                                        <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>

                                        <p className="text-sm text-gray-500">{selectedArticle.author}</p>
                                        <img src={selectedArticle.urlToImage} alt=""
                                             className="mt-4 w-full h-60 object-cover"/>

                                        <p className="mt-2">{selectedArticle.description}</p>
                                        <p className="mt-2">{selectedArticle.content}</p>
                                        <a href={selectedArticle.url} className='mt-2'>Learn more →</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
