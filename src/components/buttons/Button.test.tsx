import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect, vi } from 'vitest';

describe('Button component', () => {
  it('renders children correctly', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeDefined();
  });

  it('applies the correct CSS classes based on props', () => {
    const { rerender } = render(
      <Button variant="primary" size="medium">
        Button
      </Button>
    );

    let button = screen.getByRole('button');
    expect(button.className).toContain('button-app');
    expect(button.className).toContain('button-app-md');
    expect(button.className).toContain('button-app-primary');
    expect(button.className).toContain('button-app-md');

    rerender(
      <Button variant="secondary" size="large" animation="pulse">
        Button
      </Button>
    );

    button = screen.getByRole('button');
    expect(button.className).toContain('button-app-secondary');
    expect(button.className).toContain('button-app-lg');
    expect(button.className).toContain('animate-pulse');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('renders with an icon in the correct position', () => {
    const { rerender } = render(
      <Button icon={<span data-testid="test-icon" />} iconPosition="left">
        With Icon
      </Button>
    );

    let iconEl = screen.getByTestId('test-icon');
    expect(iconEl.parentElement?.className).toContain('mr-2');

    rerender(
      <Button icon={<span data-testid="test-icon" />} iconPosition="right">
        With Icon
      </Button>
    );

    iconEl = screen.getByTestId('test-icon');
    expect(iconEl.parentElement?.className).toContain('ml-1');
  });

  it('renders as impression button with correct properties', () => {
    render(<Button impression>View Impressions</Button>);

    const button = screen.getByRole('button');
    expect(button.className).toContain('button-app');
    expect(button.className).toContain('button-app-sm');
    expect(button.className).toContain('button-app-text');
    expect(button.getAttribute('title')).toBe('View Impressions');
    expect(button.getAttribute('aria-label')).toBe('View Impressions');

    const iconSpan = button.querySelector('span.ml-1');
    expect(iconSpan).toBeDefined();
  });

  it('overrides impression defaults when custom values provided', () => {
    render(
      <Button impression title="Custom Title" aria-label="Custom Label" impressionIconSize={20}>
        Custom Impression
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button.getAttribute('title')).toBe('Custom Title');
    expect(button.getAttribute('aria-label')).toBe('Custom Label');
  });
  it('handles disabled state correctly', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    expect(button.className).toContain('button-app-disabled');
  });
});
