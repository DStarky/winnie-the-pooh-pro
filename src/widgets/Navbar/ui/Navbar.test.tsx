import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Theme from 'src/app/providers/ThemeProvider';

describe('Navbar component', () => {
  test('Navbar render', () => {
    render(
      <Theme>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Theme>,
    );
    const navbarEl = screen.getByTestId('navbar');
    expect(navbarEl).toBeInTheDocument();
  });
});
