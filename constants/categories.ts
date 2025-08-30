export const categories = [
    'business', 'entertainment', 'general',
    'health', 'science', 'sports',
    'technology'
] as const;

export type Category = (typeof categories)[number]