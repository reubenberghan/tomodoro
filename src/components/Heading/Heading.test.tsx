import { render, screen } from '@testing-library/react';
import Heading from './Heading';

test('renders heading name', () => {
  const { rerender } = render(<Heading />);

  expect(screen.getByText(/hello world/i)).toBeInTheDocument();

  rerender(<Heading name="Bob" />);

  expect(screen.getByText(/hello bob/i)).toBeInTheDocument();
});
