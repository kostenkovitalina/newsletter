'use client'
import React from 'react';
import Image from "next/image";
import useNews, {Article} from "@/hooks/useNews";
import {Props} from "@/type/categoty-type";

const News: React.FC<Props> = ({selectedCategory, articles: propsArticles}) => {
    const articles = useNews(selectedCategory);

    const firstTwoNews = articles.filter(article => article.urlToImage).slice(0, 2)

    const withImage = articles.filter(a => a.urlToImage)
    const withoutImage = articles.filter(a => !a.urlToImage)

    let result: Article[] = []
    let i = 0, j = 0;

    while (i < withImage.length || j < withoutImage.length) {
        for (let k = 0; k < 2 && i < withImage.length; k++) {
            result.push(withImage[i++])
        }

        for (let k = 0; k < 2 && j < withoutImage.length; k++) {
            result.push(withoutImage[j++])
        }
    }

    return (
        <div className="w-full max-w-[1240px] mx-auto text-base font-serif mt-6 flex flex-col">
            <div className='text-[33px]'>
                <h2>Latest News</h2>
                <hr/>
            </div>

            <div className="flex gap-8 mt-[30px]">
                <div className="flex-[3] min-w-0">
                    <div className='grid grid-cols-2 gap-4'>
                        {result.map((article, index) => (
                            <div key={index} className="relative w-[390px] h-[340px]">
                                {article.urlToImage ? (
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div>
                                        {/*Todo 2 image and 2 description without image*/}
                                    </div>
                                )}

                                <div className="absolute top-0 left-0 right-0 bg-opacity-60 text-white p-3">
                                    <h3 className="text-base font-semibold line-clamp-2" style={{fontSize: 24}}>
                                        {article.title}
                                    </h3>
                                    <p style={{fontSize: 10, color: "white"}}>{article.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*<ul>*/}
                    {/*    {result.map((article) => (*/}
                    {/*        <li key={article.url}>*/}
                    {/*            <strong>{article.title}</strong><br/>*/}
                    {/*            <small>{article.source?.name}</small>*/}
                    {/*            {article.urlToImage && (*/}
                    {/*                <Image*/}
                    {/*                    src={article.urlToImage}*/}
                    {/*                    width={100}*/}
                    {/*                    height={100}*/}
                    {/*                    alt={'news image'}*/}
                    {/*                    unoptimized*/}
                    {/*                />*/}
                    {/*            )}*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
    );
};

export default News;
