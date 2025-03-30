import { render, screen, fireEvent } from '@testing-library/react';
import { useReducer } from 'react';
import Main from './Main'; // Adjust the import path as needed
import { fetchAPI, submitAPI } from './api.js';

// Mock fetchAPI function
jest.mock('./api.js', () => ({
    fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00']),
    submitAPI: jest.fn(() => true),
}));

describe('Main Component Tests', () => {

    it('should initialize availableTimes with data from fetchAPI', () => {
        render(<Main />);
        expect(fetchAPI).toHaveBeenCalled();
        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));

        // Use findByRole or findByText to wait for asynchronous data
        // For synchronous fetchAPI it is not needed.
        const selectElement = screen.getByLabelText(/Select a Time:/i);
        expect(selectElement).toBeInTheDocument();
        expect(selectElement.children).toHaveLength(4); // Includes the default option
    });

    it('should update availableTimes when date changes', () => {
        render(<Main />);

        const datePicker = screen.getByLabelText(/Select a Date:/i);
        fireEvent.change(datePicker, { target: { value: '2023-10-27' } });

        expect(fetchAPI).toHaveBeenCalledTimes(2); // Initial call + date change call
        expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-10-27'));

        const selectElement = screen.getByLabelText(/Select a Time:/i);
        expect(selectElement).toBeInTheDocument();
        expect(selectElement.children).toHaveLength(4); // Includes the default option
    });
});