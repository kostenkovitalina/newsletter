import {render, screen} from "@testing-library/react";
import {Header} from "@/app/(marketing)/header";

// jest.mock('@/app/(marketing)/navbar', () => ({
//     Navbar: () => <div data-testid="navbar" />,
// }));

test('header component', () => {
    render(<Header onCategoryChange={jest.fn()}/>)

    expect(screen.getByText('NEWSLETTER')).toBeInTheDocument();

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
})
