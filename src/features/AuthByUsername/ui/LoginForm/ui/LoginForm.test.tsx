import {  screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import { customRender } from 'src/shared/lib/tests/customRender';

describe('Modal component', () => {
  test('Modal render', () => {
    customRender(<LoginForm />);
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});
