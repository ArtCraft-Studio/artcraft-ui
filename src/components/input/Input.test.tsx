import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input'; 
import '@testing-library/jest-dom';

describe('Input component', () => {
  test('renders label and placeholder', () => {
    render(<Input label="Name" placeholder="Enter name" />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  test('renders error message', () => {
    render(<Input error="Error!" />);
    expect(screen.getByText('Error!')).toBeInTheDocument();
  });

  test('handles user input', () => {
    render(<Input placeholder="Name" />);
    const input = screen.getByPlaceholderText('Name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Dmitry' } });
    expect(input.value).toBe('Dmitry');
  });
});

describe('Textarea component', () => {
  test('renders label and placeholder', () => {
    render(<Input.Textarea label="Comment" placeholder="Enter text" />);
    expect(screen.getByText('Comment')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('renders error for textarea', () => {
    render(<Input.Textarea error="Field required" />);
    expect(screen.getByText('Field required')).toBeInTheDocument();
  });

  test('handles textarea input', () => {
    render(<Input.Textarea placeholder="Comment" />);
    const textarea = screen.getByPlaceholderText('Comment') as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Тестовое сообщение' } });
    expect(textarea.value).toBe('Тестовое сообщение');
  });
});
