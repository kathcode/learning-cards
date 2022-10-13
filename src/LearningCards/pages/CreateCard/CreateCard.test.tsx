import { render, screen } from '../../../shared/utils/testingUtils';
import { CreateCard } from './CreateCard';

test('renders Learning cards link', () => {
  render(<CreateCard />);
  const linkElement = screen.getByText(/Create card/i);
  expect(linkElement).toBeInTheDocument();
});
