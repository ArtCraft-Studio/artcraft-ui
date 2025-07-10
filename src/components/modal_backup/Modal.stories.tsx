import type { Meta, StoryObj } from '@storybook/react-vite';
// Update the import path to the actual file where Modal is exported
import Modal from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <Modal.Header onClose={() => setOpen(false)}>Modal Title</Modal.Header>
          <Modal.Body>Modal content goes here.</Modal.Body>
          <Modal.Footer>
            <button onClick={() => setOpen(false)}>Close</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
