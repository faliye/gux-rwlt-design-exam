import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './RadioGroup';

test('renders learn react link', () => {
  // render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
