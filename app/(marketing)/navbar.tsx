import React from 'react';
import {RealTimeClock} from "@/app/(marketing)/real-time-clock";
import {categories, Category} from "@/constants/categories";

type Props = {
    onCategoryChange: (category: Category) => void;
}

export const Navbar: React.FC<Props> = ({onCategoryChange}) => {
    return (
        <div className="w-full max-w-[1240px] mx-auto bg-[#1A1A1A] px-0 sm:px-4">
            <div className=" flex flex-wrap items-center justify-start gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        className="h-[50px] w-[140px] flex items-center justify-center
                        uppercase font-bold text-white bg-[#1A1A1A] hover:bg-[#04594D] focus:bg-[#04594D]
                        transition-colors"
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
                <div
                    className="ml-auto text-white font-bold mx-2"
                    data-testid="real-time-clock">
                    <RealTimeClock/>
                </div>
            </div>
        </div>
    );
};
