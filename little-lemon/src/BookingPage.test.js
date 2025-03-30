import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage'; // Adjust the import path
import { fetchAPI, submitAPI } from './api.js';

// Mock fetchAPI and submitAPI
jest.mock('./api.js', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00']),
  submitAPI: jest.fn(() => true),
}));

describe('BookingPage Component Tests', () => {
  const mockSubmitForm = jest.fn();

  it('should render the form with required attributes', () => {
    render(<BookingPage submitForm={mockSubmitForm} />);

    expect(screen.getByLabelText(/Select a Date:/i)).toHaveAttribute('required');
    expect(screen.getByRole('radio', { name: /1 person/i })).toHaveAttribute('required');
    expect(screen.getByLabelText(/Select a Time:/i)).toHaveAttribute('required');
    expect(screen.getByLabelText(/Occasion:/i)).toHaveAttribute('required');
  });

  it('should display date error message when no date is selected', async () => {
    render(<BookingPage submitForm={mockSubmitForm} />);

    fireEvent.click(screen.getByRole('button', { name: /Confirm Reservation/i }));

    await waitFor(() => {
      expect(screen.getByText(/Please select a date./i)).toBeInTheDocument();
    });
  });

  it('should display time error message when no time is selected', async () => {
    render(<BookingPage submitForm={mockSubmitForm} />);

    fireEvent.click(screen.getByRole('button', { name: /Confirm Reservation/i }));
    await waitFor(() => {
      expect(screen.getByText(/Please select a time./i)).toBeInTheDocument();
    });
  });

  it('should display diners error message when no diner is selected', async () => {
    render(<BookingPage submitForm={mockSubmitForm} />);

    fireEvent.click(screen.getByRole('button', { name: /Confirm Reservation/i }));
    await waitFor(() => {
      expect(screen.getByText(/Please select the number of diners./i)).toBeInTheDocument();
    });
  });

  it('should display occasion error message when no occasion is selected', async () => {
    render(<BookingPage submitForm={mockSubmitForm} />);

    fireEvent.click(screen.getByRole('button', { name: /Confirm Reservation/i }));
    await waitFor(() => {
      expect(screen.getByText(/Please select an occasion./i)).toBeInTheDocument();
    });
  });

  it('should submit the form when all fields are valid', async () => {
    render(<BookingPage submitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText(/Select a Date:/i), {
      target: { value: '2023-10-27' },
    });
    fireEvent.click(screen.getByRole('radio', { name: /2 people/i }));
    fireEvent.change(screen.getByLabelText(/Select a Time:/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/Occasion:/i), {
      target: { value: 'Birthday' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Confirm Reservation/i }));

    expect(mockSubmitForm).toHaveBeenCalled();
  });

  it('should disable submit button when fields are invalid', () => {
    render(<BookingPage submitForm={mockSubmitForm} />);

    expect(screen.getByRole('button', { name: /Confirm Reservation/i })).toBeDisabled();
  });

  it('should enable submit button when fields are valid', () => {
    render(<BookingPage submitForm={mockSubmitForm} />);
    fireEvent.change(screen.getByLabelText(/Select a Date:/i), {
      target: { value: '2023-10-27' },
    });
    fireEvent.click(screen.getByRole('radio', { name: /2 people/i }));
    fireEvent.change(screen.getByLabelText(/Select a Time:/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/Occasion:/i), {
      target: { value: 'Birthday' },
    });

    expect(screen.getByRole('button', { name: /Confirm Reservation/i })).toBeEnabled();
  });
});