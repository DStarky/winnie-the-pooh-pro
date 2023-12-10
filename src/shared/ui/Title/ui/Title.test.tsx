import { render, screen } from '@testing-library/react';
import Title from './Title';
describe('Text component', () => {
  test('Text component render', () => {
    render(<Title />);
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
  test('Displaying text for a text component', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Title>Some text</Title>);
    expect(screen.getByText('Some text')).toBeInTheDocument();
  });
});
