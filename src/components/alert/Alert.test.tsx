import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Alert from './Alert';
import { vi } from 'vitest';

describe('Alert', () => {
  it('renders children', () => {
    render(<Alert>Test alert</Alert>);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
  });

  it('renders correct variant', () => {
    render(<Alert variant="success">Success</Alert>);
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<Alert onClose={onClose}>Closable</Alert>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(onClose).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Alert className="custom-class">Class</Alert>);
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toHaveClass('custom-class');
  });
});
