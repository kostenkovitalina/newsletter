'use client';
import React, { ReactNode, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./custom-slider.css";

interface CustomCarouselProps {
    children: ReactNode[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
    const [curr, setCurr] = useState(0);
    const total = children.length;

    const prev = () => setCurr(curr => (curr === 0 ? total - 1 : curr - 1));
    const next = () => setCurr(curr => (curr === total - 1 ? 0 : curr + 1));

    return (
        <div className='overflow-hidden relative w-full'>
            <div
                className='flex transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {children.map((child, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>

            <div className='absolute inset-0 flex items-center justify-between px-4'>
                <button onClick={prev} className='p-2 bg-white rounded-full shadow'>
                    <ChevronLeft size={24} />
                </button>
                <button onClick={next} className='p-2 bg-white rounded-full shadow'>
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default CustomCarousel;
