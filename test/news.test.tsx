import {render, screen} from "@testing-library/react";
import News from "@/app/news/news";
import '@testing-library/jest-dom';
import useNews from "@/hooks/useNews";

jest.mock('@/hooks/useNews');

const mockArticles = [
    {
        url: 1,
        title: "Test Article 1",
        content: "This is a test article content.",
        urlToImage: "https://example.com/image1.jpg",
        author: "Author 1",
        source: { name: "Source 1" },
    },
    {
        url: 2,
        title: "Test Article 2",
        content: "This is a test article content.",
        urlToImage: "https://example.com/image2.jpg",
        author: "Author 2",
        source: { name: "Source 2" },
    }
]



test ('News component renders articles', () => {
    (useNews as jest.Mock).mockReturnValue(mockArticles);

    render(<News selectedCategory="general"/>)

    expect(screen.getByText('Latest News')).toBeInTheDocument();

    const article1Headings = screen.getAllByText('Test Article 1');
    expect(article1Headings.length).toBeGreaterThanOrEqual(1);

    const article2Headings = screen.getAllByText('Test Article 2');
    expect(article2Headings.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByText('Author 1')).toBeInTheDocument();
    expect(screen.getByText('Author 2')).toBeInTheDocument();

    expect(screen.getByText('Source 1')).toBeInTheDocument();
    expect(screen.getByText('Source 2')).toBeInTheDocument();
})