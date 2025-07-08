import React from 'react';
import {SearchBar} from "@/app/(marketing)/search-bar";
import {Navbar} from "@/app/(marketing)/navbar";
import {Category} from "@/constanta/categories";

type Props = {
    onCategoryChange: (category: Category) => void;
}

export const Header = ({onCategoryChange}: Props) => {
    return (
        <header className='h-[475px] w-full border-b-2 border-slate-200' style={{backgroundColor: '#020809'}}>
            <div className='pt-1 pb-7'>
                <div className='h-[300px] bg-[#020809] flex items-center justify-between px-6 w-full gap-x-4'>
                    <div className="flex-1">
                        <h1 className='text-4xl font-extrabold text-white tracking-wide ml-1 sm:ml-6'>
                            NEWSLETTER
                        </h1>
                    </div>
                    <SearchBar/>
                </div>
                <div
                    className='-mt-6'
                    data-testid="navbar-wrapper">
                    <Navbar onCategoryChange={onCategoryChange}/>
                </div>
            </div>
        </header>
    );
};

