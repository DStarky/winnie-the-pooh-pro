import type { Meta, StoryObj } from '@storybook/react';

import Title, { ThemeTitle } from './Title';

const meta = {
  title: 'shared/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: ThemeTitle.PRIMARY,
    size: 'h1',
    children: 'Some text for title',
  },
};
export const Error: Story = {
  args: {
    theme: ThemeTitle.ERROR,
    size: 'h1',
    children: 'Some text for title',
  },
};

export const H1: Story = {
  args: {
    theme: ThemeTitle.PRIMARY,
    size: 'h1',
    children: 'Some text for title',
  },
};
export const H2: Story = {
  args: {
    theme: ThemeTitle.PRIMARY,
    size: 'h2',
    children: 'Some text for title',
  },
};
export const H3: Story = {
  args: {
    theme: ThemeTitle.PRIMARY,
    size: 'h3',
    children: 'Some text for title',
  },
};
export const H4: Story = {
  args: {
    theme: ThemeTitle.PRIMARY,
    size: 'h4',
    children: 'Some text for title',
  },
};
export const H5: Story = {
  args: {
    theme: ThemeTitle.PRIMARY,
    size: 'h5',
    children: 'Some text for title',
  },
};
