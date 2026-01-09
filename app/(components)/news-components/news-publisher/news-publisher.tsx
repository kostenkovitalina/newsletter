import React from "react";
import {ArticleType} from "@/type/article-type";

type NewsPublisherProps = {
    publishedAt?: string;
    className?: string;
};

export const NewsPublisher: React.FC<NewsPublisherProps> = ({ publishedAt, className }) => {
    if (!publishedAt) return null;

    const date = new Date(publishedAt);
    const formattedDate = date.toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    return <div className={`text-xs ${className}`}>{formattedDate}</div>;
};
