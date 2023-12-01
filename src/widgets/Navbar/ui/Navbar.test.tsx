import { screen } from '@testing-library/react';
import Navbar from './Navbar';
import { renderWithRouter } from 'src/shared/lib/tests/renderWithRouter/renderWithRouter';

describe('Navbar component', () => {
  test('Navbar render', () => {
    renderWithRouter(<Navbar />);
    const navbarEl = screen.getByTestId('navbar');
    expect(navbarEl).toBeInTheDocument();
  });
});
