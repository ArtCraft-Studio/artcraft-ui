import * as React from 'react';
import './Button.css';
import { PlayIcon } from '../icons';

export interface ButtonProps {
  /**
   * Content to display inside the button
   */
  children?: React.ReactNode;
  /**
   * Icon to display inside the button
   */
  icon?: React.ReactNode;
  /**
   * Position of the icon (left or right)
   */
  iconPosition?: 'left' | 'right';
  /**
   * Animation effect to apply to the button
   */
  animation?: 'pulse' | 'bounce' | 'shake' | 'rotate' | 'none';
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Button disabled state
   */
  disabled?: boolean;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Title attribute
   */
  title?: string /**
   * Aria label for accessibility
   */;
  'aria-label'?: string;
  /**
   * When true, shows as an impression button with play icon
   */
  impression?: boolean;
  /**
   * Size of the impression play icon
   */
  impressionIconSize?: number;
}

/**
 * Button component with optional icon and animation effects
 */

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
  // If impression is true, override some defaults
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

  // App-style base classes for visual style (not animation)
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
  // Animation classes (preserved)
  const animationClasses = {
    none: '',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    shake: 'animate-shake',
    rotate: 'animate-spin',
  };
  // Disabled classes
  const disabledClasses = disabled ? 'button-app-disabled' : '';
  // Combine all classes
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

  // Debug logging for development
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
