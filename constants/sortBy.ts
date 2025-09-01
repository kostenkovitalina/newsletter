export const sortBy = [
    'relevancy', 'popularity', 'publishedAt'
] as const;

export type SortBy = (typeof sortBy)[number]