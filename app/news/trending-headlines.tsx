import React from 'react';
import useNews from "@/hooks/useNews";
import {Props} from "@/type/categoty-type";

export const TrendingHeadlines: React.FC<Props> = ({selectedCategory}) => {
    const articles = useNews('general')

    return (
        <div className='h-[1425px] w-[410px] mx-auto bg-white mt-[50px]'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center mb-4'>
                    <h2>TrendingHeadlines</h2>
                    <button className='bg-red-500 text-white px-4 py-2 rounded mt-4'>View all</button>
                </div>
            </div>

            <div>
              {/*Todo: sort by popularity*/}
            </div>
        </div>
    );
};

