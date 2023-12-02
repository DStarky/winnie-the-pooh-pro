import { screen } from '@testing-library/react';
import Navbar from './Navbar';
import { customRender } from 'src/shared/lib/tests/customRender';

describe('Navbar component', () => {
  test('Navbar render', () => {
    customRender(<Navbar />);
    const navbarEl = screen.getByTestId('navbar');
    expect(navbarEl).toBeInTheDocument();
  });
});
