import React, {ReactNode} from 'react';

type Props = {
    children?: ReactNode,
    className?: string
}

export const NewsCards = ({children, className}: Props) => {
    return (
        <div className={`max-w-[390px] max-h-[340px]: ${className}`}>
            {children}
        </div>
    );
};

