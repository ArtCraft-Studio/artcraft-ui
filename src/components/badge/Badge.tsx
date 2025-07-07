import React from 'react';
import './Badge.css';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick
}) => {
    const variantClasses = {
        primary: 'ac-badge--primary',
        secondary: 'ac-badge--secondary',
        success: 'ac-badge--success',
        danger: 'ac-badge--danger',
        warning: 'ac-badge--warning',
        light: 'ac-badge--light',
        dark: 'ac-badge--dark'
    };

    const sizeClasses = {
        sm: 'ac-badge--sm',
        md: 'ac-badge--md',
        lg: 'ac-badge--lg'
    };

    const classes = `ac-badge ${variantClasses[variant]} ${sizeClasses[size]}${onClick ? ' ac-badge--clickable' : ''} ${className}`;

    return <span className={classes} onClick={onClick}>{children}</span>;
};

export default Badge;
