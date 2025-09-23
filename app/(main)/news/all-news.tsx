'use client'
import React, {useState} from 'react';
import News from "@/app/(main)/news/news";
import {TopNews} from "@/app/(main)/news/top-news";
import {Header} from "@/app/(marketing)/header";
import {TrendingHeadlines} from "@/app/(main)/news/trending-headlines";
import {Category} from "@/constants/categories";

export const AllNews = () => {
    const [selectedCategory, setSelectedCategory] = useState('general' as Category);

    return (
        <div>
            <Header onCategoryChange={setSelectedCategory}/>
            <TopNews selectedCategory={selectedCategory}/>
            <div className="flex max-w-[1240px] mx-auto gap-8 mt-6">
                <div className="w2/3">
                    <News
                        selectedCategory={selectedCategory}/>
                </div>

                <div className="w-1/3">
                    <TrendingHeadlines sortBy='popularity'/>
                </div>
            </div>
        </div>
    );
};
