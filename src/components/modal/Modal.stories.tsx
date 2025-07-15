import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <Modal.Header onClose={() => setOpen(false)}>Modal Title</Modal.Header>
          <Modal.Body>
            <p>This is a modal body. You can put any content here.</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => setOpen(false)}>Close</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
