import {render, screen} from "@testing-library/react";
import {TopNews} from "@/app/(main)/news/top-news";
import useNews from "@/hooks/useNews";
import "@testing-library/jest-dom";

jest.mock('@/hooks/useNews');

const mockArticles = [
    {
        title: 'first news',
        urlToImage: 'https://example.com/image1.jpg',
        author: 'Author 1',
        description: 'Description of the first news',
    }, {
        title: 'second news',
        urlToImage: 'https://example.com/image1.jpg',
        author: 'Author 1',
        description: 'Description of the first news',
    },{
        title: 'third news',
        urlToImage: 'https://example.com/image1.jpg',
        author: 'Author 1',
        description: 'Description of the first news',
    }
]

test('top news component renders correctly', () => {
    (useNews as jest.Mock).mockReturnValue(mockArticles);

    render(<TopNews selectedCategory={'general'}/>)

    expect(screen.getByText('first news')).toBeInTheDocument();
    expect(screen.getByText('second news')).toBeInTheDocument();
    expect(screen.getByText('third news')).toBeInTheDocument();
})
