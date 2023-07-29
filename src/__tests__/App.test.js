import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByTestId('custom-element')
  expect(element).toHaveStyle('width: 100px;');
 
});
