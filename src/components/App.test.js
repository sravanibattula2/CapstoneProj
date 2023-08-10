import { render, screen } from "@testing-library/react";
import Form from './Form';

test('Renders the BookingForm heading', () => {
    render(<Form />);
    const headingElement = screen.getByLabelText("name");
    expect(headingElement).toBeInTheDocument();
})