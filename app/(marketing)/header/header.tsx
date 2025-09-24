import React, {useContext} from 'react';
import {SearchBar} from "@/app/(marketing)/search-bar";
import {Navbar} from "@/app/(marketing)/navbar";
import {Category} from "@/constants/categories";
import {HeaderMenu} from "@/app/(marketing)/header/header-menu";
import {HeaderContext, HeaderContextProvider} from "@/app/(marketing)/header/header-context-provider";

type Props = {
    onCategoryChange?: (category: Category) => void;
}

export const Header = ({onCategoryChange}: Props) => {
    return (
        <header className='h-[475px] w-full border-b-2 border-slate-200' style={{backgroundColor: '#020809'}}>
            <HeaderContextProvider>
                <div className='pt-1 pb-7'>
                    <HeaderTopSection/>
                    <div
                        className='-mt-6'
                        data-testid="navbar">
                        {onCategoryChange && (
                            <Navbar onCategoryChange={onCategoryChange}/>
                        )}
                    </div>
                </div>
            </HeaderContextProvider>
        </header>
    );
};

const HeaderTopSection = () => {
    const {isSearchOpen} = useContext(HeaderContext);

    const classes = 'h-[300px] bg-[#020809] flex items-center justify-between px-6 w-full gap-x-4'

    return isSearchOpen ? (
        <div className={classes}>
            <SearchBar/>
        </div>
    ) : (
        <div className={classes}>
            <div className="flex-1">
                <HeaderMenu/>
            </div>
            <SearchBar/>
        </div>
    )
}

// todo: зробить щоб при кліку в пусте місце закривався пошуковий блок