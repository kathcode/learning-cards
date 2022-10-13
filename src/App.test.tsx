import React from 'react';
import { render, screen } from './shared/utils/testingUtils';
import App from './App';

test('renders Learning cards link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning cards/i);
  expect(linkElement).toBeInTheDocument();
});
