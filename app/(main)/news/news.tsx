'use client'
import React, {useState} from 'react';
import useNews from "@/hooks/useNews";
import {CategoryType} from "@/type/category-type";
import {NewsCards} from "@/app/(components)/news-components/news-cards/news-cards";
import {NewsPublisher} from "@/app/(components)/news-components/news-publisher/news-publisher";
import {ArticleType} from '@/type/article-type';
import {NewsModal} from "@/app/(components)/news-components/news-modal/news-modal";
import {NewsList} from "@/app/(components)/news-components/news-list/news-list";

const News: React.FC<CategoryType> = ({selectedCategory}) => {
    const articles = useNews(selectedCategory)

    return (
        <>
            <div className="w-full max-w-[1240px] mx-auto text-base font-serif md:mt-6 flex flex-col">
                <div className='hidden md:block text-[33px]'>
                    <h2>Latest News</h2>
                </div>

                <div className='hidden md:block p-2'>
                    <hr/>
                </div>
                <div className="flex gap-8 mt-[20px]">
                    <div className="flex-[3]">
                        <NewsList articles={articles} layout='grid'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
