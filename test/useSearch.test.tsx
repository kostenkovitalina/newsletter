import {useSearchParams} from "next/navigation";
import {render, renderHook, waitFor} from "@testing-library/react";
import {useSearch} from "@/hooks/useSearch";
import { URLSearchParams } from 'url';

jest.mock('next/navigation', () => ({
    useSearchParams: jest.fn(),
}));
describe('useSearch', () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams("query=test"));

    global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve({ articles: [{ title: "mock title" }] }),
    }) as any;


    test('query search article title', async() => {
        const{ result} = renderHook(() => useSearch())

        await waitFor(() => {
            expect(result.current.news.length).toBeGreaterThan(0);
        });

        expect(result.current.news.length).toBeGreaterThan(0);
        expect(result.current.query).toBe("test");
    })
})