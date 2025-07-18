import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'User name',
    placeholder: 'Enter name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    error: 'Invalid email',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Enter query',
    icon: <span role="img" aria-label="search">🔍</span>,
  },
};
