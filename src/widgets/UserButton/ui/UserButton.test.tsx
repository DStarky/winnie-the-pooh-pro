import { render, screen } from '@testing-library/react';
import UserButton from './UserButton';
describe('Modal component', () => {
  test('Modal render', () => {
    render(<UserButton />);
    expect(screen.getByTestId('user-button')).toBeInTheDocument();
  });
});
