import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';
describe('Button component', () => {
  test('Button render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('Classes added', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button className="testclass">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('testclass');
  });
  test('Theme classes added', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.FILLED}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('filled');
    expect(screen.getByText('Test')).not.toHaveClass('clear');
  });
});
