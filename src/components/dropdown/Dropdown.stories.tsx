import type { Meta, StoryObj } from '@storybook/react-vite';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Dropdown trigger={<button>Open menu</button>}>
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item danger>Delete</Dropdown.Item>
    </Dropdown>
  ),
};
