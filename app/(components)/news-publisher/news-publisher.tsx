import React from "react";
import {ArticleType} from "@/type/article-type";

type Props = {
    className?: string
}

type Mode = ArticleType & Props

export const NewsPublisher: React.FC<Mode> = ({ publishedAt, className }) => {
    if (!publishedAt) return null;

    const date = new Date(publishedAt);
    const formattedDate = date.toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return <div className={`text-xs ${className}`}>{formattedDate}</div>;
};
