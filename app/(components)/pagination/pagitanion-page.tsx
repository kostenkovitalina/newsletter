import {useRouter} from "next/navigation";
import {Pagination} from "@mui/material";
import React from "react";

type PaginationPageProps = {
    page: number,
    pageSize?: number,
    totalResults?: number,
    query?: string,
    onPageChange?: (newPage: number) => void
};

export const PaginationPage = ({page, pageSize = 20, totalResults = 0, query,}: PaginationPageProps) => {
    const router = useRouter();

    const maxResults = 100;
    const pageCount = Math.ceil(Math.min(totalResults, maxResults) / (pageSize));

    if (pageCount === 0) return null

    return (
        <Pagination
            count={pageCount}
            color="primary"
            page={page}
            onChange={(event, page) => router.push(`/search?query=${encodeURIComponent(query || '')}&page=${page}`)}/>
    );
};