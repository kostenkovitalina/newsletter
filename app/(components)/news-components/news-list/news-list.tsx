import {ArticleType} from '@/type/article-type';
import React, {useState} from 'react';
import {NewsCards} from '../news-cards/news-cards';
import {NewsPublisher} from '../news-publisher/news-publisher';
import {NewsModal} from "@/app/(components)/news-components/news-modal/news-modal";

type NewsListProps = {
    articles: ArticleType[],
    layout?: 'grid' | 'list',
    limit?: number,
}

export const NewsList = ({articles, layout, limit}: NewsListProps) => {
    const [selectedArticle, setSelectedArticle] = useState<ArticleType | null>(null)

    const visibleArticles = limit ? articles.slice(0, limit) : articles;

    return (
        <>
            {layout === "grid" && (
                <div className='grid grid-cols-2 gap-4'>
                    {visibleArticles.map((article, index) => (
                        <NewsCards key={index} className="relative">
                            {article.urlToImage ? (
                                <>
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute top-0 left-0 right-0 hover:bg-black hover:bg-opacity-60 text-white p-3">
                                        <button onClick={() => setSelectedArticle(article)}>
                                            <h3 className="text-xs md:text-base font-semibold line-clamp-2">
                                                {article.title}
                                            </h3>
                                        </button>
                                        <div className='flex gap-4'>
                                            <p className='text-xs text-white'>{article.author}</p>
                                            <NewsPublisher publishedAt={article.publishedAt}/>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className='bg-white font-semibold p-2 h-[340px]'>
                                    <button onClick={() => setSelectedArticle(article)}>
                                        <h2 className='text-base md:text-xs text-base'>{article.title}</h2>
                                    </button>
                                    <div className='flex gap-4'>
                                        <p className='text-xs'>{article.author}</p>
                                        <NewsPublisher publishedAt={article.publishedAt}/>
                                    </div>
                                    <p className='text-blue-600 text-base'>{article.description}</p>
                                </div>
                            )}
                        </NewsCards>
                    ))}
                </div>
            )}

            {layout === 'list' && (
                <div className='flex flex-col gap-4 px-6'>
                    {visibleArticles.map((article, index) => (
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
            )}

            {selectedArticle && (
                <NewsModal article={selectedArticle} onClose={() => setSelectedArticle(null)}/>
            )}
        </>
    );
};
