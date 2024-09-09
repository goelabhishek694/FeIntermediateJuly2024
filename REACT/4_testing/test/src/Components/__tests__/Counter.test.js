//redenr function is sued to redner a react component into vdom for testing 
// screen object is sued to access the o/p of the rendered component 
import { fireEvent, render, screen } from '@testing-library/react';
//import component 
import Counter from '../Counter';

test('intital state check', () => {
    render(<Counter></Counter>);
    //selection
    const countText = screen.getByText("Count is 0");
    const plusText = screen.getByText("+");
    const minusText = screen.getByText("-");

    //assertion 
    expect(countText).toBeInTheDocument();
    expect(plusText).toBeInTheDocument();
    expect(minusText).toBeInTheDocument();
});

test('inc by 1', () => {
    render(<Counter></Counter>);
    //selection
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);

    //assertion 
    const isOnePresent = screen.getByText("Count is 1");
    expect(isOnePresent).toBeInTheDocument();
});


test('dec by 2', () => {
    render(<Counter></Counter>);
    //selection
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    //assertion 
    const isTwoPresent = screen.getByText("Count is -2");
    expect(isTwoPresent).toBeInTheDocument();
});
