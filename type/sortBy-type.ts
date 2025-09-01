import {SortBy} from "@/constants/sortBy";
import {ArticleType} from "@/type/article-type";

export type SortByType = {
    sortBy?: SortBy;
    articles?: ArticleType[];
}