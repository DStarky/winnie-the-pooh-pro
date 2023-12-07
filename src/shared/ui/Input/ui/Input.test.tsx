import { render, screen } from '@testing-library/react';
import Input from './Input';
describe('Modal component', () => {
  test('Modal render', () => {
    render(<Input />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
  test('Modal has placeholder text', () => {
    render(<Input placeholder="placeholder text" />);
    expect(screen.getByPlaceholderText('placeholder text')).toBeInTheDocument();
  });
});
