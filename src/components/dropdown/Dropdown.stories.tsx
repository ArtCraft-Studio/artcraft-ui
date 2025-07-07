import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './index';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown trigger={<button>Открыть меню</button>}>
      <Dropdown.Item>Пункт 1</Dropdown.Item>
      <Dropdown.Item>Пункт 2</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item danger>Удалить</Dropdown.Item>
    </Dropdown>
  ),
};
