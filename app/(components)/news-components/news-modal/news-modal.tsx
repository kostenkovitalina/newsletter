import React from 'react';
import {ArticleType} from "@/type/article-type";

type NewsModalProps = {
    article: ArticleType,
    onClose: () => void;
}

export const NewsModal = ({article, onClose}: NewsModalProps) => {
    return (
        <div>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y:auto">
                <div className="bg-white p-4 max-w-xl w-full h-auto relative">
                    <button
                        className="absolute top-2 right-2 text-xl font-bold"
                        onClick={onClose}
                    >
                        ×
                    </button>

                    <h2 className="text-2xl font-bold">{article.title}</h2>

                    <p className="text-sm text-gray-500">{article.author}</p>
                    <img src={article.urlToImage} alt=""
                         className="mt-4 w-full h-60 object-cover"/>

                    <p className="mt-2">{article.description}</p>
                    <p className="mt-2">{article.content}</p>
                    <a href={article.url} className='mt-2'>Learn more →</a>
                </div>
            </div>
        </div>
    );
};

