import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

// @ts-expect-error: Support both Vitest (vi) and Jest (jest) test runners
const fn = typeof vi !== 'undefined' ? vi.fn : (typeof jest !== 'undefined' ? jest.fn : () => {});

describe('Modal', () => {
  it('renders children when open', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('does not render children when closed', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    );
    expect(screen.queryByText('Header')).not.toBeInTheDocument();
    expect(screen.queryByText('Body')).not.toBeInTheDocument();
    expect(screen.queryByText('Footer')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <Modal.Header onClose={onClose}>Header</Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>
          <button onClick={onClose}>Close</button>
        </Modal.Footer>
      </Modal>
    );
    fireEvent.click(screen.getByText('Close'));
    expect(onClose).toHaveBeenCalled();
  });
});
