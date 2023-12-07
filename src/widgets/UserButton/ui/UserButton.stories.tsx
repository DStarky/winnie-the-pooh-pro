import type { Meta, StoryObj } from '@storybook/react';

import UserButton from './UserButton';

const meta = {
  title: 'widgets/UserButton',
  component: UserButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {},
};