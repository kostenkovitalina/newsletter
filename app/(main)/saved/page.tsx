'use client';

// import {NewsList} from "@/app/(components)/news-components/news-list/news-list";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {newsActions} from "@/store/news-slice";
import {RootState} from "@/store";
import {getItem} from "@/utils/localStorage";
import dynamic from "next/dynamic";
import {NewsList} from "@/app/(components)/news-components/news-list/news-list";


const Page = () => {
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false);

    const savedArticles = useSelector((state: RootState) =>
        state.news.savedNews
    )

    const onClickClearAll = () => {
        dispatch(newsActions.clearAllNews());
    };

    useEffect(() => {
        setMounted(true);
    }, [dispatch]);

    if (!mounted) return null

    return (
        <>
            {savedArticles.length === 0 && <p>Немає збережених новин</p>}
            <button onClick={onClickClearAll}>Clean</button>
            <NewsList articles={savedArticles} layout='grid' col={3}/>
        </>
    );
};

export default Page;