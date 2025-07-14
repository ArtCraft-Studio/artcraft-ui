import * as React from 'react';
import './Button.css';
import { PlayIcon } from '../icons/PlayIcon';

export interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  animation?: 'pulse' | 'bounce' | 'shake' | 'rotate' | 'none';
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  'aria-label'?: string;
  impression?: boolean;
  impressionIconSize?: number;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconPosition = 'left',
  animation = 'none',
  size = 'medium',
  variant = 'primary',
  className = '',
  disabled = false,
  impression = false,
  impressionIconSize = 14,
  ...props
}) => {
  const finalVariant = impression ? 'text' : variant;
  const finalSize = impression ? 'small' : size;
  const finalIcon = impression ? <PlayIcon size={impressionIconSize} className="ml-1" /> : icon;
  const finalIconPosition = impression ? 'right' : iconPosition;
  const finalClassName = impression
    ? `button-app button-app-text ${className}`
    : className;
  const finalTitle = impression ? props.title || 'View Impressions' : props.title;
  const finalAriaLabel = impression
    ? props['aria-label'] || 'View Impressions'
    : props['aria-label'];
  const baseClasses = 'button-app';
  const sizeClasses = {
    small: 'button-app-sm',
    medium: 'button-app-md',
    large: 'button-app-lg',
  };
  const variantClasses = {
    primary: 'button-app-primary',
    secondary: 'button-app-secondary',
    outline: 'button-app-outline',
    text: 'button-app-text',
  };
  const animationClasses = {
    none: '',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    shake: 'animate-shake',
    rotate: 'animate-spin',
  };
  const disabledClasses = disabled ? 'button-app-disabled' : '';
  const buttonClasses = [
    baseClasses,
    sizeClasses[finalSize],
    variantClasses[finalVariant],
    animationClasses[animation],
    disabledClasses,
    finalClassName,
  ]
    .filter(Boolean)
    .join(' ');
  if (process.env.NODE_ENV === 'development') {
    console.log('Button classes:', buttonClasses);
  }
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      title={finalTitle}
      aria-label={finalAriaLabel}
      {...props}
    >
      {finalIcon && finalIconPosition === 'left' && <span className="mr-2">{finalIcon}</span>}
      {children}
      {finalIcon && finalIconPosition === 'right' && <span className="ml-1">{finalIcon}</span>}
    </button>
  );
};

export default Button;
