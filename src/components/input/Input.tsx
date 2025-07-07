// filepath: /artcraft-ui/artcraft-ui/src/components/Input.tsx
import React from 'react';
import './Input.css'; // Assuming you have some styles for the input components

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    className?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    className?: string;
}

const Input = ({
    label,
    error,
    icon,
    className = '',
    ...props
}: InputProps) => {
    const inputClasses = `input-field${error ? ' input-error' : ''} ${className}`;

    return (
        <div className="input-root">
            {label && (
                <label className="input-label">
                    {label}
                </label>
            )}
            <div className="input-wrapper">
                {icon && (
                    <div
                        className="input-icon"
                        style={{ left: '1rem' }}
                    >
                        {icon}
                    </div>
                )}
                <input
                    className={inputClasses}
                    style={icon ? { paddingLeft: '2.75rem' } : {}}
                    {...props}
                />
            </div>
            {error && (
                <p className="input-error-message">{error}</p>
            )}
        </div>
    );
};

const Textarea: React.FC<TextareaProps> = ({
    label,
    error,
    className = '',
    ...props
}) => {
    const textareaClasses = `input-field textarea-field${error ? ' input-error' : ''} ${className}`;

    return (
        <div className="input-root">
            {label && (
                <label className="input-label">
                    {label}
                </label>
            )}
            <textarea
                className={textareaClasses}
                {...props}
            />
            {error && (
                <p className="input-error-message">{error}</p>
            )}
        </div>
    );
};

const InputWithComponents = Object.assign(Input, {
    Textarea,
});

export default InputWithComponents;