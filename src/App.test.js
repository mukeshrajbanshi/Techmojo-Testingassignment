import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders learn react link', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders let check react app", () => {
  render(<Counter />);
  const divElement = screen.getByText(/let check react app/i);
  expect(divElement).toBeInTheDocument();
})