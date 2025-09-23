import {ArticleType} from "@/type/article-type";

type State = {
    articles: ArticleType[],
    loading: boolean,
    error: string | null,
    selectedArticle: ArticleType | null,
    isModalOpen: boolean,
}

type Action =
    | { type: 'START' }
    | { type: 'SUCCESS' }
    | { type: 'ERROR', payload: string }
    | { type: 'FINISHED' }

export const initialState: State = {
    articles: [],
    loading: false,
    error: null,
    selectedArticle: null,
    isModalOpen: false,
}

export const newsReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'START':
            return {...state, loading: true, error: null}
        case 'SUCCESS':
            return {...state, loading: false, error: null}
        case 'ERROR':
            return {...state, loading: false, error: action.payload}
        case 'FINISHED':
            return {...state, loading: false}
        default:
            return state
    }
}
