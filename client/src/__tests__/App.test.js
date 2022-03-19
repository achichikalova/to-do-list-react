import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders initial to do list components', () => {
  render(<App />);
  const headerElement = screen.getByText(/to do list/i);
  const inputElement = screen.getByRole('textbox', { name: /print your task here.../i });
  expect(headerElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();

});
