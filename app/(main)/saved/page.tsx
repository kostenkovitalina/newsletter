'use client';

import usePersisterState from "@/hooks/usePersisterState";
import {ArticleType} from "@/type/article-type";
import {NewsList} from "@/app/(components)/news-components/news-list/news-list";
import React, {useEffect, useState} from "react";

const Page = () => {
    const [mounted, setMounted] = useState(false);
    const [savedArticles] = usePersisterState<ArticleType[]>('saveArticles', []);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!savedArticles) return null
    if (!mounted) return null

    return (
        <>
            {savedArticles.length === 0 && <p>Немає збережених новин</p>}
            <NewsList articles={savedArticles} layout='grid' col={3}/>
        </>
    );
};

export default Page;