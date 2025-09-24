import {createContext, ReactNode, useState} from "react";

type HeaderContextType = {
    isSearchOpen: boolean;
    openSearch: () => void;
    closeSearch: () => void;
}

export const HeaderContext = createContext<HeaderContextType>(
    {
        isSearchOpen: false,
        openSearch: () => {},
        closeSearch: () => {},
    }
)

export const HeaderContextProvider = ({children}: {children: ReactNode}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);

    return (
        <HeaderContext.Provider value={{isSearchOpen, openSearch, closeSearch}}>
            {children}
        </HeaderContext.Provider>
    )
}