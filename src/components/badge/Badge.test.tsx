import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Badge } from './index';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies variant and size classes', () => {
    render(<Badge variant="success" size="lg">Success</Badge>);
    const badge = screen.getByText('Success');
    expect(badge).toHaveClass('ac-badge--success');
    expect(badge).toHaveClass('ac-badge--lg');
  });

  it('calls onClick', () => {
    const onClick = jest.fn();
    render(<Badge onClick={onClick}>Clickable</Badge>);
    fireEvent.click(screen.getByText('Clickable'));
    expect(onClick).toHaveBeenCalled();
  });
});
