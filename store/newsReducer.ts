import {ArticleType} from "@/type/article-type";

export type State = {
    articles: ArticleType[],
    loading: boolean,
    error: string | null,
    selectedArticle: ArticleType | null,
    isModalOpen: boolean,
    page: number,
    totalResult: number
}

type Action =
    | { type: 'START' }
    | { type: 'SUCCESS', payload?: { totalResult?: number } }
    | { type: 'ERROR', payload: string }
    | { type: 'FINISHED' }
    | { type: 'SET_PAGE', payload: { page: number; totalResult: number } }

export const initialState: State = {
    articles: [],
    loading: false,
    error: null,
    selectedArticle: null,
    isModalOpen: false,
    page: 1,
    totalResult: 0
}

export const newsReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'START':
            return {...state, loading: true, error: null}
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                totalResult: action.payload?.totalResult ?? state.totalResult
            }
        case 'ERROR':
            return {...state, loading: false, error: action.payload}
        case 'FINISHED':
            return {...state, loading: false}
        case 'SET_PAGE':
            return {...state, page: action.payload.page, totalResult: action.payload.totalResult};
        default:
            return state
    }
}
