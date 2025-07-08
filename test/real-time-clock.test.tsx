import { act, render, screen } from "@testing-library/react";
import { RealTimeClock } from "@/app/(marketing)/real-time-clock";

jest.useFakeTimers()

test("real-time clock renders current time", () => {
    let initialText = '';

    act(() => {
        render(<RealTimeClock />);
    });

    const initialTime = screen.getByText(/^\d{2}:\d{2}$/)
    initialText = initialTime.textContent!
    expect(initialTime).toBeInTheDocument()

    act(() => {
        jest.advanceTimersByTime(60_000)
    })

    const updatedTime = screen.getByText(/^\d{2}:\d{2}$/)
    expect(updatedTime).toBeInTheDocument()
    expect(updatedTime.textContent).not.toBe(initialText)
});
