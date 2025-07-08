'use client'
import React from 'react';
import {useState} from 'react';
import News from "@/app/news/news";
import {TopNews} from "@/app/news/top-news";
import {Header} from "@/app/(marketing)/header";
import {Category} from "@/constanta/categories";

export const NewsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('general' as Category);

    return (
        <div>
            <Header onCategoryChange={setSelectedCategory}/>
            <TopNews selectedCategory={selectedCategory} />
            <News selectedCategory={selectedCategory} />
        </div>
    );
};
