import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './index';

describe('Modal', () => {
  it('does not render when closed', () => {
    render(<Modal isOpen={false} onClose={() => {}}>Closed</Modal>);
    expect(screen.queryByText('Closed')).not.toBeInTheDocument();
  });

  it('renders children when open', () => {
    render(<Modal isOpen={true} onClose={() => {}}>Open</Modal>);
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('calls onClose when backdrop is clicked', () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} onClose={onClose}>Test</Modal>);
    fireEvent.click(document.querySelector('.ac-modal-backdrop')!);
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose when Escape is pressed', () => {
    const onClose = jest.fn();
    render(<Modal isOpen={true} onClose={onClose}>Test</Modal>);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });
});
