import { render, screen } from '@testing-library/react';
import Text from './Text';
describe('Text component', () => {
  test('Text component render', () => {
    render(<Text />);
    expect(screen.getByTestId('text-component')).toBeInTheDocument();
  });
  test('Displaying text for a text component', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Text>Some text</Text>);
    expect(screen.getByText('Some text')).toBeInTheDocument();
  });
  test('Text component has a default class', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Text>Some text</Text>);
    expect(screen.getByText('Some text')).toHaveClass('xs');
  });
  test('Text component has an assignable class', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Text size="l">Some text</Text>);
    expect(screen.getByText('Some text')).toHaveClass('l');
  });
});
