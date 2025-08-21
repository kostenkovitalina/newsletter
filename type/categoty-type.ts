import {Category} from "@/constanta/categories";
import {Article} from "@/hooks/useNews";

export type Props = {
    selectedCategory?: Category;
    articles?: Article[];
}
