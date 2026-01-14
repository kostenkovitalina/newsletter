import React, {useContext} from 'react';
import {SearchBar} from "@/app/(marketing)/search-bar";
import {Navbar} from "@/app/(marketing)/navbar";
import {Category} from "@/constants/categories";
import {HeaderMenu} from "@/app/(marketing)/header/header-menu";
import {HeaderContext, HeaderContextProvider} from "@/app/(marketing)/header/header-context-provider";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

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
            <SignedOut>
                <SignInButton />
                <SignUpButton>
                    <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-2 sm:px-5 cursor-pointer">
                        Sign Up
                    </button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

// todo: зробить щоб при кліку в пусте місце закривався пошуковий блок