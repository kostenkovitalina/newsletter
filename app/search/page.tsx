'use client'
import React from 'react';
import {useSearch} from "@/hooks/useSearch";
import {PaginationPage} from "@/app/(components)/pagination/pagitanion-page";
import {NewsCards} from "@/app/(components)/news-cards/news-cards";
import {NewsContainer} from "@/app/(components)/container/news-container";
import {Header} from "@/app/(marketing)/header";
import {NewsPublisher} from "@/app/(components)/news-publisher/news-publisher";

export const dynamic = "force-dynamic";

function Page() {
    const {news, query, loading, error} = useSearch();

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10">Error: {error}</p>
    if (news.length === 0) return <p className="text-center mt-10">No results found "{query}".</p>;

    return (
        <>
            <Header/>
            <div className="w-full h-full max-w-[1000px] -mt-[200px] mx-auto bg-white font-serif">
                <div>
                    <h1 className="text-2xl pt-10 pl-6">Search Results '{query}'</h1>
                </div>
                <div className='justify-items-center p-5'>
                    <PaginationPage/>
                </div>
                <NewsContainer className="grid grid-cols-3 gap-3 p-6 justify-items-center">
                    {news.map((article: any) => (
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
                                            <h2 className="text-lg line-clamp-2">
                                                {article.title}
                                            </h2>
                                            <div className='flex flex-col gap-4'>
                                                <p className='text-xs'>{article.author}</p>
                                                <NewsPublisher publishedAt={article.publishedAt}/>
                                            </div>
                                        </div>
                                    </>
                                ) :
                                <div className='bg-[#F3F2EA]'>
                                    <h2 className='text-xl'>{article.title}</h2>
                                    <div className='flex flex-col'>
                                        <p className='text-xs'>{article.author}</p>
                                        <NewsPublisher publishedAt={article.publishedAt}/>
                                    </div>
                                    <br/>
                                    <p className='text-[#04594D] text-base'>{article.description}</p>
                                </div>
                            }
                        </NewsCards>
                    ))}
                </NewsContainer>
                <div className='justify-items-center p-5'>
                    <PaginationPage/>
                </div>
            </div>
        </>
    );
}

export default Page
