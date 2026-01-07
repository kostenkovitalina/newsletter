'use client'
import React from 'react';
import useNews from "@/hooks/useNews";
import {CategoryType} from "@/type/category-type";
import {NewsList} from "@/app/(components)/news-components/news-list/news-list";
import {Loading} from "@/app/(components)/loading/loading";

const News: React.FC<CategoryType> = ({selectedCategory}) => {
    const {articles, loading} = useNews(selectedCategory)

    if (loading) return <Loading/>

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
                        <NewsList articles={articles} layout='grid' col={2}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
