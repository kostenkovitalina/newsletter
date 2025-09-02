import {SortBy} from "@/constants/sortBy";
import {ArticleType} from "@/type/article-type";

export type SortedType = {
    sortBy?: SortBy;
    articles?: ArticleType[];
}