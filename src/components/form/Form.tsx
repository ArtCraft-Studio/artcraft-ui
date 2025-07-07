import React from 'react';
import './Form.css';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface FormGroupProps {
    children: React.ReactNode;
    className?: string;
}

export interface FormLabelProps {
    children: React.ReactNode;
    className?: string;
    htmlFor?: string;
}

export interface FormControlProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    as?: 'input' | 'textarea' | 'select';
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    disabled?: boolean;
    rows?: number;
    children?: React.ReactNode;
}

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

export interface FormTextProps {
    children: React.ReactNode;
    className?: string;
}

const Form: React.FC<FormProps> & {
    Group: React.FC<FormGroupProps>;
    Label: React.FC<FormLabelProps>;
    Control: React.FC<FormControlProps>;
    Select: React.FC<FormSelectProps>;
    Text: React.FC<FormTextProps>;
} = ({ children, className = '', ...props }) => {
    return (
        <form className={className} {...props}>
            {children}
        </form>
    );
};

const FormGroup: React.FC<FormGroupProps> = ({ children, className = '' }) => {
    return (
        <div className={`ac-form-group ${className}`}>
            {children}
        </div>
    );
};

const FormLabel: React.FC<FormLabelProps> = ({ children, className = '', htmlFor }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`ac-form-label ${className}`}
        >
            {children}
        </label>
    );
};

const FormControl: React.FC<FormControlProps> = ({
    as = 'input',
    className = '',
    type = 'text',
    rows,
    children,
    ...props
}) => {
    const baseClasses = 'ac-form-control';

    if (as === 'textarea') {
        return (
            <textarea
                className={`${baseClasses} ${className}`}
                rows={rows}
                {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
        );
    }

    if (as === 'select') {
        return (
            <select
                className={`${baseClasses} ${className}`}
                {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
            >
                {children}
            </select>
        );
    }

    return (
        <input
            type={type}
            className={`${baseClasses} ${className}`}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
    );
};

const FormSelect: React.FC<FormSelectProps> = ({ children, className = '', ...props }) => {
    const baseClasses = 'ac-form-control';

    return (
        <select className={`${baseClasses} ${className}`} {...props}>
            {children}
        </select>
    );
};

const FormText: React.FC<FormTextProps> = ({ children, className = '' }) => {
    return (
        <div className={`ac-form-text ${className}`}>
            {children}
        </div>
    );
};

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Select = FormSelect;
Form.Text = FormText;

export default Form;
