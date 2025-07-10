import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './index';
import { vi } from 'vitest';

describe('Dropdown', () => {
  it('renders trigger', () => {
    render(
      <Dropdown trigger={<button>Open</button>}>
        <Dropdown.Item>Item</Dropdown.Item>
      </Dropdown>
    );
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('shows menu on trigger click', () => {
    render(
      <Dropdown trigger={<button>Open</button>}>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown>
    );
    fireEvent.click(screen.getByText('Open'));
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('calls onClick for item', () => {
    const onClick = vi.fn();
    render(
      <Dropdown trigger={<button>Open</button>}>
        <Dropdown.Item onClick={onClick}>Clickable</Dropdown.Item>
      </Dropdown>
    );
    fireEvent.click(screen.getByText('Open'));
    fireEvent.click(screen.getByText('Clickable'));
    expect(onClick).toHaveBeenCalled();
  });
});
