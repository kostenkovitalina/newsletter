'use client'
import React, {useContext, useState} from 'react';
import {useRouter} from "next/navigation";
import {HeaderContext} from './header/header-context-provider';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    const router = useRouter();
    const {isSearchOpen, openSearch, closeSearch} = useContext(HeaderContext);
    const [term, setTerm] = useState('')

    const handleSearch = (term: string) => {
        if (!term) return;
        router.push(`/search?query=${encodeURIComponent(term)}`);
        closeSearch();
    };

    const Input = () => (
        <div className="w-full max-w-[630px] flex items-center">
            <input
                data-testid="search-bar"
                className='flex-grow min-w-[50px] h-[50px] px-4 border-none
                bg-[#04594D] text-[#F7F7F4] outline-none'
                type="search"
                placeholder="Search for headlines"
                onChange={(e) => setTerm(e.target.value)}
            />
            <button
                className="w-[116px] h-[50px] pl-4 pr-4 font-extrabold uppercase
                text-white bg-[#8E4042] border-none cursor-pointer"
                onClick={() => handleSearch(term)}
            >
                Search
            </button>
        </div>
    )

    return (
        <>
            <div className="hidden md:block w-[630px]">
                <Input/>
            </div>

            <div className='block md:hidden items-end'>
                {isSearchOpen ? <div className='w-[430px]'><Input/></div> : (
                    <button onClick={openSearch}>
                        <SearchIcon fontSize='large' className='text-[#04594D]'/>
                    </button>
                )}
            </div>
        </>
    );
};

