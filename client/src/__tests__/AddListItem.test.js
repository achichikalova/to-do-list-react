import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddListItem from '../components/AddListItem';

test('renders initial to do list components', () => {
  render(<AddListItem />);

  const inputElement = screen.getByRole('textbox', { name: /print your task here.../i });
  const addButton = screen.getByTestId(/addcircleicon/i);

  expect(inputElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test('do not add empty task', () => {
  render(<AddListItem />);

  const inputElement = screen.getByRole('textbox', { name: /print your task here.../i });
  const addButton = screen.getByTestId(/addcircleicon/i);
  // const errorElement;

  
  userEvent.type(inputElement, 'Test Task');
  expect(inputElement.toHaveValue('Test Task'));
  screen.debug()
});