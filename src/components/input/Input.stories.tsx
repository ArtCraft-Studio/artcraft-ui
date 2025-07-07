import type { Meta, StoryObj } from '@storybook/react';
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
    label: 'Имя пользователя',
    placeholder: 'Введите имя',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Введите email',
    error: 'Некорректный email',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Поиск',
    placeholder: 'Введите запрос',
    icon: <span role="img" aria-label="search">🔍</span>,
  },
};
