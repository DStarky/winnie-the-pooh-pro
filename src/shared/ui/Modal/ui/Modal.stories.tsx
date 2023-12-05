import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,

  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Это модальное окно. Вот как оно выглядит',
  },

  decorators: [
    Story => (
      <div style={{margin: '100px'}}>
        <Story />
      </div>
    ),
  ],
};
