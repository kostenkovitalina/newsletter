import {render, screen} from "@testing-library/react";
import {Navbar} from "@/app/(marketing)/navbar";
import userEvent from '@testing-library/user-event'

test('press navigate button navbar', async () => {
    const category = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'] as const;

    const onCategoryChange = jest.fn();

    render(<Navbar onCategoryChange={onCategoryChange}/>)

    const user = userEvent.setup()

    const generalButton = screen.getByText('general')
    const businessButton = screen.getByText('business')
    // await userEvent.click(generalButton)

    await user.click(generalButton)
    await user.click(businessButton)

    expect(onCategoryChange).toHaveBeenCalled();
    expect(onCategoryChange).toHaveBeenCalledWith('general');
    expect(onCategoryChange).toHaveBeenCalledWith('business');

    expect(screen.getByTestId('real-time-clock')).toBeInTheDocument()
    expect(screen.getByText(/\d{2}:\d{2}/)).toBeInTheDocument();
})