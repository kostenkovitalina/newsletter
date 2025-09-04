import React, {ReactNode} from 'react';

type Props = {
    children?: ReactNode,
    className?: string
}

export const NewsContainer = ({children, className}: Props) => {
    return (
        <div className={`w-full h-full max-w-[1240px] ${className}`}>
            {children}
        </div>
    );
};


