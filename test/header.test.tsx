import {render, screen} from "@testing-library/react";
import {Header} from "@/app/(marketing)/header";

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({push: jest.fn()})),
}));

test('header component', () => {
    render(<Header onCategoryChange={jest.fn()}/>)

    expect(screen.getByText('NEWSLETTER')).toBeInTheDocument();

    expect(screen.getByTestId('navbar')).toBeInTheDocument();

    expect(screen.getByTestId('search-bar')).toBeInTheDocument()
})
