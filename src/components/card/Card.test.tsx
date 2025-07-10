import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './index';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Test Card</Card>);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('applies custom className', () => {
  render(<Card className="custom-class" data-testid="card">Class</Card>);
  expect(screen.getByTestId('card')).toHaveClass('custom-class');
});


  it('renders header, body, and footer', () => {
    render(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
