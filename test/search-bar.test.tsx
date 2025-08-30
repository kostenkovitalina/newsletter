import {getByText, render} from "@testing-library/react";
import {SearchBar} from "@/app/(marketing)/search-bar";
import userEvent from "@testing-library/user-event";

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({push: jest.fn()})),
}));

test('search bar', async () => {
    const {getByPlaceholderText, getByText} = render(<SearchBar/>)

    // eslint-disable-next-line no-undef
    const input = getByPlaceholderText('Search for headlines') as HTMLInputElement;
    const button = getByText('Search')

    const user = userEvent.setup()

    await user.type(input, 'Healthy habit')
    expect(input.value).toBe('Healthy habit')

    // await user.click(button)
})

// Todo: click button and push message