import type { Meta, StoryObj } from '@storybook/react';

import AppLink, { AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Some text',
    theme: AppLinkTheme.PRIMARY,
    to: '/'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Some text',
    theme: AppLinkTheme.SECONDARY,
    to: '/'
  },
};
