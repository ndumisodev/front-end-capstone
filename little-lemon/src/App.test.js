import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


import { initializeTimes, updateTimes } from "./components/Main"; // Adjust the path

test("initializeTimes returns the correct initial times", () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(["18:00", "19:00", "20:00", "21:00"]); // Adjust the expected value
  });


  test("updateTimes returns the same state when no date is provided", () => {
    const initialState = ["18:00", "19:00", "20:00"];
    const newState = updateTimes(initialState, { type: "UPDATE", payload: null });
    expect(newState).toEqual(initialState);
  });
  
  test("updateTimes returns correct times for saturday", ()=>{
      const saturday = new Date(2024, 0, 6);
      const expected = ["17:00", "18:00", "19:00"];
      const newState = updateTimes([], {type: "UPDATE", payload: saturday});
      expect(newState).toEqual(expected);
  });
  
  test("updateTimes returns correct times for non saturday", ()=>{
      const friday = new Date(2024, 0, 5);
      const expected = ["18:00", "19:00", "20:00", "21:00"];
      const newState = updateTimes([], {type: "UPDATE", payload: friday});
      expect(newState).toEqual(expected);
  });