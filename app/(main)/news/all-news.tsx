'use client'
import React, {useState} from 'react';
import News from "@/app/(main)/news/news";
import {TopNews} from "@/app/(main)/news/top-news";
import {Header} from "@/app/(marketing)/header/header";
import {TrendingHeadlines} from "@/app/(main)/news/trending-headlines";
import {Category} from "@/constants/categories";
import {SmallScreenNews} from "@/app/(components)/news-components/small-screen-news/small-screen-news";

export const AllNews = () => {
    const [selectedCategory, setSelectedCategory] = useState('general' as Category);

    return (
        <div>
            <Header onCategoryChange={setSelectedCategory}/>
            <TopNews selectedCategory={selectedCategory}/>

            <div className='block md:hidden'>
                <SmallScreenNews/>
            </div>

            <div className='hidden md:block'>
                <div className="flex flex-col md:flex-row max-w-[1240px] mx-auto gap-8 mt-6">
                    <div className="md:w-2/3 w-full">
                        <News selectedCategory={selectedCategory}/>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <TrendingHeadlines sortBy='popularity'/>
                    </div>
                </div>
            </div>
        </div>
    );
};
