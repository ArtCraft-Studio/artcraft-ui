import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body>Card content</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card padding="none">
      <Card.Body>No inner padding</Card.Body>
    </Card>
  ),
};
