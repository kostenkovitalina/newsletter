'use client'
import React, {useState} from 'react';
import News from "@/app/news/news";
import {TopNews} from "@/app/news/top-news";
import {Header} from "@/app/(marketing)/header";
import {Category} from "@/constanta/categories";
import {TrendingHeadlines} from "@/app/news/trending-headlines";

export const NewsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('general' as Category);

    // const topNewsArticle: Article[] = useNews('general')
    // const newsArticle: Article[] = useNews(selectedCategory)
    //
    // const uniqueNews = newsArticle.filter(
    //     (article: Article) => !topNewsArticle.some((top: Article) => top.url === article.url)
    // );
    //

    return (
        <div>
            <Header onCategoryChange={setSelectedCategory}/>
            <TopNews selectedCategory={selectedCategory}/>
            <div className="flex max-w-[1240px] mx-auto gap-8 mt-6">
                <div className="w2/3">
                    <News
                        // articles={uniqueNews}
                        selectedCategory={selectedCategory}/>
                </div>

                <div className="w-1/3">
                    <TrendingHeadlines selectedCategory={selectedCategory}/>
                </div>
            </div>
        </div>
    );
};
