import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './index';
import { vi } from 'vitest';

describe('Form', () => {
  it('renders children', () => {
    render(<Form>Test Form</Form>);
    expect(screen.getByText('Test Form')).toBeInTheDocument();
  });

  it('calls onSubmit', () => {
    const onSubmit = vi.fn(e => e.preventDefault());
    render(<Form onSubmit={onSubmit}><button type="submit">Send</button></Form>);
    fireEvent.click(screen.getByText('Send'));
    expect(onSubmit).toHaveBeenCalled();
  });

  it('renders group, label, control, select, and text', () => {
    render(
      <Form>
        <Form.Group>
          <Form.Label htmlFor="test">Label</Form.Label>
          <Form.Control id="test" placeholder="input" />
        </Form.Group>
        <Form.Select><option>opt</option></Form.Select>
        <Form.Text>help</Form.Text>
      </Form>
    );
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('input')).toBeInTheDocument();
    expect(screen.getByText('opt')).toBeInTheDocument();
    expect(screen.getByText('help')).toBeInTheDocument();
  });
});
