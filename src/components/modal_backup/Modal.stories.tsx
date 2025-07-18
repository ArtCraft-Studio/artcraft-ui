
import React, { useState } from 'react';
import Modal from '../modal/Modal';

export default {
  title: 'Modal/Modal (Backup)',
  component: Modal,
};

export const Basic = () => {
  const [open, setOpen] = useState(true);
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <Modal.Header>Modal Title</Modal.Header>
      <Modal.Body>
        <p>This is a backup modal story.</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};
