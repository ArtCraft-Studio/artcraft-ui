import type { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from './Alert';
import React from 'react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Information message',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Successfully completed!',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning: something requires your attention.',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Error! Something went wrong.',
  },
};

export const Closable: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    return open ? <Alert {...args} onClose={() => setOpen(false)} /> : <div />;
  },
  args: {
    variant: 'info',
    children: 'Closable message',
  },
};
