import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './index';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <Form onSubmit={e => e.preventDefault()}>
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control id="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="desc">Description</Form.Label>
        <Form.Control as="textarea" id="desc" placeholder="Description..." rows={3} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="select">Select</Form.Label>
        <Form.Select id="select">
          <option>Option 1</option>
          <option>Option 2</option>
        </Form.Select>
      </Form.Group>
      <Form.Text>Caption or hint</Form.Text>
      <button type="submit">Save</button>
    </Form>
  ),
};
