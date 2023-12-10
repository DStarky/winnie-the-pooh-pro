import { screen } from '@testing-library/react';
import UserButton from './UserButton';
import { customRender } from 'src/shared/lib/tests/customRender';
describe('Modal component', () => {
  test('Modal render', () => {
    customRender(<UserButton />);
    expect(screen.getByTestId('user-button')).toBeInTheDocument();
  });
});
