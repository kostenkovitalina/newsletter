import React from 'react';
import {ArticleType} from "@/type/article-type";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import usePersisterState from "@/hooks/usePersisterState";

type NewsModalProps = {
    article: ArticleType,
    onClose: () => void;
}

export const NewsModal = ({article, onClose}: NewsModalProps) => {
    const [savedArticles, setSavedArticles] = usePersisterState<ArticleType[]>('saveArticles', [])

    const isSave = savedArticles.some(a => a.url === article.url)

    const onClickSave = () => {
        setSavedArticles([...savedArticles, article]);
    }

    const onClickDelete = () => {
        setSavedArticles(savedArticles.filter(a => a.url !== article.url))
    }

    const imgNone = 'public/placeholder/general-img-landscape.png'

    return (
        <div>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
                <div className="bg-white p-4 max-w-xl w-full h-auto relative">
                    <button
                        className="absolute top-2 right-2 text-xl font-bold"
                        onClick={onClose}
                    >
                        ×
                    </button>

                    <h2 className="text-2xl font-bold">{article.title}</h2>

                    <div className='flex items-center justify-between'>
                        <p className="text-sm text-gray-500">{article.author}</p>
                        <div className='flex items-center'>
                            {isSave
                                ? <button onClick={onClickDelete}><TurnedInIcon fontSize='medium' className='text-[#04594D]'/></button>
                                : <button onClick={onClickSave}><TurnedInNotIcon fontSize='medium' className='text-[#04594D]'/></button>
                            }
                        </div>
                    </div>

                    <img src={article.urlToImage || imgNone} alt=""
                         className="mt-4 w-full h-60 object-cover"/>

                    <p className="mt-2">{article.description}</p>
                    <p className="mt-2">{article.content}</p>
                    <a href={article.url} className='mt-2'>Learn more →</a>
                </div>
            </div>
        </div>
    );
};

