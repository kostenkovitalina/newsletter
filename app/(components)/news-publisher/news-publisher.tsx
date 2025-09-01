import React from "react";
import {ArticleType} from "@/type/article-type";


export const NewsPublisher: React.FC<ArticleType> = ({ publishedAt }) => {
    if (!publishedAt) return null;

    const date = new Date(publishedAt);
    const formattedDate = date.toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return <div className="text-xs text-gray-400">{formattedDate}</div>;
};
