import React from 'react';
import { render } from '@testing-library/react';
import { PlayIcon } from './PlayIcon';
import { describe, it, expect } from 'vitest';

describe('PlayIcon component', () => {
  it('renders with default props', () => {
    const { container } = render(<PlayIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '16');
    expect(svg).toHaveAttribute('height', '16');
    expect(svg).toHaveClass('artcraft-ui-icon');
    expect(svg).toHaveClass('artcraft-ui-icon--play');
  });

  it('applies custom size', () => {
    const { container } = render(<PlayIcon size={24} />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('applies custom color', () => {
    const { container } = render(<PlayIcon color="#ff0000" />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', '#ff0000');
  });

  it('applies custom className', () => {
    const { container } = render(<PlayIcon className="custom-icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-icon');
    expect(svg).toHaveClass('artcraft-ui-icon');
  });

  it('applies custom style', () => {
    const { container } = render(<PlayIcon style={{ margin: '10px' }} />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('margin: 10px');
  });
});
