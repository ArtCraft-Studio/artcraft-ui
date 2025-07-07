import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input'; 
import '@testing-library/jest-dom';

describe('Input component', () => {
  test('renders label and placeholder', () => {
    render(<Input label="Имя" placeholder="Введите имя" />);
    expect(screen.getByText('Имя')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введите имя')).toBeInTheDocument();
  });

  test('renders error message', () => {
    render(<Input error="Ошибка!" />);
    expect(screen.getByText('Ошибка!')).toBeInTheDocument();
  });

  test('handles user input', () => {
    render(<Input placeholder="Имя" />);
    const input = screen.getByPlaceholderText('Имя') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Дмитрий' } });
    expect(input.value).toBe('Дмитрий');
  });
});

describe('Textarea component', () => {
  test('renders label and placeholder', () => {
    render(<Input.Textarea label="Комментарий" placeholder="Введите текст" />);
    expect(screen.getByText('Комментарий')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введите текст')).toBeInTheDocument();
  });

  test('renders error for textarea', () => {
    render(<Input.Textarea error="Поле обязательно" />);
    expect(screen.getByText('Поле обязательно')).toBeInTheDocument();
  });

  test('handles textarea input', () => {
    render(<Input.Textarea placeholder="Комментарий" />);
    const textarea = screen.getByPlaceholderText('Комментарий') as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: 'Тестовое сообщение' } });
    expect(textarea.value).toBe('Тестовое сообщение');
  });
});
