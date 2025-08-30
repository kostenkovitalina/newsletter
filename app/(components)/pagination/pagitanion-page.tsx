import {useRouter} from "next/navigation";
import {useSearch} from "@/hooks/useSearch";
import {Pagination} from "@mui/material";
import React from "react";

export const PaginationPage = () => {
    const router = useRouter()
    const {page, totalResult, query} = useSearch()

    const pageSize = 20
    const maxResults = 100
    const pageCount = Math.ceil(Math.min(totalResult, maxResults) / pageSize)

    return (
        <>
            <Pagination
                count={pageCount}
                color="primary"
                page={Number(page)}
                onChange={(event, page) => router.push(`/search?query=${encodeURIComponent(query)}&page=${page}`)}
            />
        </>
    )
}
