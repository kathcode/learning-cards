import { render, screen } from '@testing-library/react';
import { CreateCard } from './CreateCard';

test('renders Learning cards link', () => {
  render(<CreateCard />);
  const linkElement = screen.getByText(/Create card/i);
  expect(linkElement).toBeInTheDocument();
});
