import { render, screen, waitFor } from '@testing-library/react';
import FanCodeCheck from '../components/FanCodeCheck';
import '@testing-library/jest-dom/extend-expect';

test('renders FanCode users task completion status', async () => {
  render(<FanCodeCheck />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/FanCode City Users Task Completion/i)).toBeInTheDocument();
  });
});
