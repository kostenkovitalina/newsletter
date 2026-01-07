export type ArticleType = {
    id: string,
    source?: {
        id: number,
        name: string;
    };
    author?: string;
    title?: string;
    url: string;
    description?: string;
    urlToImage?: string;
    content?: string;
    publishedAt?: string,
    pageSize?: number;
    totalResults?: number
};
