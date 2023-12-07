import { screen } from '@testing-library/react';
import Modal from './Modal';
import { customRender } from 'src/shared/lib/tests/customRender';
describe('Modal component', () => {
  test('Modal render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    customRender(<Modal withoutInitial isOpen>Test text for modal</Modal>);
    expect(screen.getByText('Test text for modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toBeInTheDocument();

  });

});
