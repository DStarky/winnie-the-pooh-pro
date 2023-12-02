import type { Meta, StoryObj } from '@storybook/react';

import AppNavLink, { AppNavLinkTheme } from './AppNavLink';

const meta = {
  title: 'shared/AppNavLink',
  component: AppNavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Some text',
    theme: AppNavLinkTheme.PRIMARY,
    to: '/',
  },
  
};

export const Secondary: Story = {
  args: {
    children: 'Some text',
    theme: AppNavLinkTheme.SECONDARY,
    to: '/',
  },
};
