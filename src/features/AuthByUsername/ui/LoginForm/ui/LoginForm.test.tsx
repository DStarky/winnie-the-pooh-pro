import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
describe('Modal component', () => {
  test('Modal render', () => {
    render(<LoginForm />);
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});
