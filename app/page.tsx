import React from 'react';
import {Header} from "@/app/(marketing)/header";
import {NewsPage} from "@/app/news/news-page";

export default function Home() {
    return (
        <div className='bg-[#F3F2EA]'>
            <NewsPage/>
        </div>
    );
}
