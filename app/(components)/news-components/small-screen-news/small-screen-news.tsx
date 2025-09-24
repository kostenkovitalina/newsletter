import React, {useState} from 'react';
import News from "@/app/(main)/news/news";
import {TrendingHeadlines} from "@/app/(main)/news/trending-headlines";

export const SmallScreenNews = () => {
    const [activeTabs, setActiveTabs] = useState<'latest' | 'trending'>('latest')

    return (
        <>
            <div className='flex justify-between font-serif mt-6 px-4'>
                <div className='text-xl'>
                    <button onClick={() => setActiveTabs('latest')}>
                        <h3>Latest News</h3>
                    </button>
                </div>

                <div className='text-xl'>
                    <button onClick={() => setActiveTabs('trending')}>
                        <h3>Trending Headlines </h3>
                    </button>
                </div>
            </div>
            <div className='p-2 w-full'>
                <hr/>
            </div>
            <div>
                {activeTabs === 'latest' && <News/>}
                {activeTabs === 'trending' && <TrendingHeadlines/>}
            </div>
        </>
    );
};
