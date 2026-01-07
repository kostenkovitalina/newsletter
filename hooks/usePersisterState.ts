'use client'
import {useEffect, useState} from "react";
import {getItem, setItem} from "@/utils/localStorage";

const usePersisterState = <T>(key: string, initialValue: T) => {
    const [value, setValue] = useState(() => {
        const item = getItem(key)
        return (item as T) || initialValue
    })

    useEffect(() => {
        setItem(key, value)
    }, [value])

    return [value, setValue] as const
}

export default usePersisterState;

// 'use client'
// import {useEffect, useReducer} from "react";
// import {getItem, setItem} from "@/utils/localStorage";
// import {newsReducer, State} from "@/store/newsReducer";
//
// const usePersisterState = <T>(key: string, initialValue: T) => {
//     const initializer = (initial: T) => {
//         const persisted = getItem(key)
//         return (persisted as T) || initial as T
//     }
//
//     const [state, dispatch] = useReducer(newsReducer, initialValue, initializer);
//     // const [value, setValue] = useState(() => {
//     //     const item = getItem(key)
//     //     return (item as T) || initialValue
//     // })
//
//     useEffect(() => {
//         setItem(key, state)
//     }, [key, state])
//
//     return [state, dispatch] as const
// }
//
// export default usePersisterState;