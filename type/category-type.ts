import {Category} from "@/constants/categories";
import {ArticleType} from "@/type/article-type";

export type CategoryType = {
    selectedCategory?: Category;
    articles?: ArticleType[];
}
