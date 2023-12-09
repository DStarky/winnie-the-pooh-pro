import type { Meta, StoryObj } from '@storybook/react';

import Text, { ThemeText } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XS: Story = {
  args: {
    size: 'xs',
    children: 'Some text for text component',
  },
};
export const S: Story = {
  args: {
    size: 's',
    children: 'Some text for text component',
  },
};
export const M: Story = {
  args: {
    size: 'm',
    children: 'Some text for text component',
  },
};
export const L: Story = {
  args: {
    size: 'l',
    children: 'Some text for text component',
  },
};
export const Error: Story = {
  args: {
    size: 'l',
    children: 'Some text for text component',
    theme: ThemeText.ERROR,
  },
};
