import { renderHook, waitFor } from '@testing-library/react';
import useNews from '@/hooks/useNews';

describe('useNews', () => {
    const mockFetch = jest.fn();

    beforeEach(() => {
        process.env.NEXT_PUBLIC_API_KEY = 'key';
        mockFetch.mockResolvedValue({
            json: () => Promise.resolve({ articles: [{ title: 'test article' }] })
        } as any);
        global.fetch = mockFetch;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    //
    // test('fetches articles for the selected general category', async () => {
    //     const category = 'general';
    //
    //     mockFetch.mockResolvedValueOnce({
    //         json: () => Promise.resolve({
    //             articles: [
    //                 { title: 'General Article 1', category },
    //                 { title: 'General Article 2', category }
    //             ]
    //         })
    //     } as any);
    //
    //     const { result } = renderHook(() => useNews(category));
    //
    //     await waitFor(() => {
    //         expect(result.current.length).toBeGreaterThan(0);
    //     });
    //     expect(mockFetch).toHaveBeenCalledWith(
    //         `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=key`,
    //         expect.objectContaining({
    //             signal: expect.anything(),
    //         })
    //     );
    //
    //     expect(result.current.every(article => (article as any).category === category)).toBe(true);
    // })

    test('fetches articles for the selected business category', async () => {
        const category = 'business';

        mockFetch.mockResolvedValueOnce({
            json: () => Promise.resolve({
                articles: [
                    { title: 'Business Article 1', category },
                    { title: 'Business Article 2', category }
                ]
            })
        } as any);

        const { result } = renderHook(() => useNews(category));

        await waitFor(() => {
            expect(result.current.length).toBeGreaterThan(0);
        });
        expect(mockFetch).toHaveBeenCalledWith(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=key`,
            expect.objectContaining({
                signal: expect.anything(),
            })
        );

        expect(result.current.every(article => (article as any).category === category)).toBe(true);
    });
});
