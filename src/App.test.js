import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn Jenkins link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});

test('always true', () => {
  expect(true).toBe(true);
});

test('always false', () => {
  expect(true).toBe(false);
});
