import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid, Row, Col, Container } from './index';

describe('Grid', () => {
  it('renders children', () => {
    render(<Grid>Test Grid</Grid>);
    expect(screen.getByText('Test Grid')).toBeInTheDocument();
  });

  it('applies cols and gap classes', () => {
    render(<Grid cols={3} gap={2}>Grid</Grid>);
    const grid = screen.getByText('Grid').parentElement;
    expect(grid).toHaveClass('ac-grid-cols-3');
    expect(grid).toHaveClass('ac-grid-gap-2');
  });

  it('renders Row and Col', () => {
    render(
      <Row>
        <Col>Col1</Col>
        <Col>Col2</Col>
      </Row>
    );
    expect(screen.getByText('Col1')).toBeInTheDocument();
    expect(screen.getByText('Col2')).toBeInTheDocument();
  });

  it('renders Container', () => {
    render(<Container>Container</Container>);
    expect(screen.getByText('Container')).toBeInTheDocument();
  });
});
