import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable',
    variant: 'secondary',
    onClick: () => alert('Badge clicked!'),
  },
};
