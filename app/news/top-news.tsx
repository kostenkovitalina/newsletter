'use client'
import React from 'react';
import Image from "next/image";
import CustomSlider from "@/app/(components)/slider/custom-slider";
import {CategoryType} from "@/type/category-type";
import {SortedType} from "@/type/sorted-type";
import useSortedNews from "@/hooks/useSortedNews";

type ModeType = CategoryType & SortedType

export const TopNews: React.FC<ModeType> = ({selectedCategory, sortBy}) => {
    const articles = useSortedNews(sortBy, selectedCategory)

    const imageSlider = articles.filter(article => article.urlToImage).slice(10, 15);
    const first = articles[0];
    const second = articles[1];
    const third = articles[2];

    return (
        <div
            className="w-full max-w-[1240px] mx-auto flex flex-col
            md:flex-row bg-white -mt-22 md:-mt-[145px] text-base font-serif"
        >
            <div className="flex flex-col w-full md:w-1/2 bg-white">
                <div className="relative w-full h-[333px] overflow-hidden rounded-none">
                    <CustomSlider>
                        {imageSlider.map((article, index) => (
                            <div key={index} className="relative w-full h-full">
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-0 left-0 right-0 bg-opacity-60 text-white p-3
                                bg-gradient-to-b from-black from-[48%] to-transparent">
                                    <h3 className="text-base font-semibold line-clamp-2" style={{fontSize: 24}}>
                                        {article.title}
                                    </h3>
                                    <p style={{fontSize: 10, color: "white"}}>{article.author}</p>
                                </div>
                            </div>
                        ))}
                    </CustomSlider>
                </div>

                {first && (
                    <div className="min-h-[140px] overflow-hidden" style={{marginLeft: 10}}>
                        <h2 className="text-base font-bold mb-2"
                            style={{fontSize: 20}}>{first.title}</h2>
                        <p style={{fontSize: 10}}>{first.author}</p>
                        <div className='flex'>
                            <p className="text-sm" style={{fontSize: 15, color: '#04594D'}}>
                                {first.description}
                            </p>
                            {first.urlToImage && (
                                <Image
                                    src={first.urlToImage}
                                    style={{marginTop: -30}}
                                    width={150}
                                    height={150}
                                    alt={'news image'}
                                    unoptimized
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col w-full md:w-1/2">
                {second && (
                    <div className="min-h-[265px] overflow-hidden" style={{backgroundColor: '#1A1A1A'}}>
                        <h2 className="text-base font-bold mb-1"
                            style={{fontSize: 20, color: '#D5D5D5', marginLeft: 10}}>
                            {second.title}
                        </h2>
                        <p className="text-sm" style={{color: '#D5D5D5', marginLeft: 10}}>{second.description}</p>
                        <div className='flex'>
                            <p className="text-sm" style={{color: '#D5D5D5', marginLeft: 10}}>{second.content}</p>
                            {second.urlToImage && (
                                <Image
                                    src={second.urlToImage}
                                    style={{marginRight: 10}}
                                    width={220}
                                    height={220}
                                    alt={'news image'}
                                    unoptimized
                                    className="mt-2"
                                />
                            )}
                        </div>
                    </div>
                )}

                {third && (
                    <div className="min-h-[209px] overflow-hidden bg-white" style={{marginLeft: 10}}>
                        <h2 className="text-base font-bold mb-1" style={{fontSize: 20}}>{third.title}</h2>
                        <p style={{fontSize: 10}}>{third.author}</p>
                        <div className='flex'>
                            <p className="text-sm text-gray-700" style={{color: '#04594D'}}>
                                {third.description}
                            </p>
                            {third.urlToImage && (
                                <Image
                                    src={third.urlToImage}
                                    style={{marginRight: 10, marginTop: -10}}
                                    width={220}
                                    height={220}
                                    alt={'news image'}
                                    unoptimized
                                    className="mt-2"
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
