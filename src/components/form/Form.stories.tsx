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
        <Form.Label htmlFor="name">Имя</Form.Label>
        <Form.Control id="name" placeholder="Введите имя" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="desc">Описание</Form.Label>
        <Form.Control as="textarea" id="desc" placeholder="Описание..." rows={3} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="select">Выбор</Form.Label>
        <Form.Select id="select">
          <option>Вариант 1</option>
          <option>Вариант 2</option>
        </Form.Select>
      </Form.Group>
      <Form.Text>Подпись или подсказка</Form.Text>
      <button type="submit">Сохранить</button>
    </Form>
  ),
};
