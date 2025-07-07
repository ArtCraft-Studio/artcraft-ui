
import React from 'react';
// Используем простые emoji вместо иконок для кроссплатформенности
import Button from '../buttons/Button';
import './Alert.css';

export interface AlertProps {
  variant?: 'success' | 'danger' | 'warning' | 'info';
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}


const variantClasses: Record<string, string> = {
  success: 'ac-alert-success',
  danger: 'ac-alert-danger',
  warning: 'ac-alert-warning',
  info: 'ac-alert-info',
};

const icons: Record<string, React.ReactNode> = {
  success: <span className="ac-alert-icon ac-alert-icon-success" role="img" aria-label="success">✔️</span>,
  danger: <span className="ac-alert-icon ac-alert-icon-danger" role="img" aria-label="danger">❌</span>,
  warning: <span className="ac-alert-icon ac-alert-icon-warning" role="img" aria-label="warning">⚠️</span>,
  info: <span className="ac-alert-icon ac-alert-icon-info" role="img" aria-label="info">ℹ️</span>,
};

const Alert: React.FC<AlertProps> = ({ variant = 'info', children, onClose, className = '' }) => {
  const classes = `ac-alert ${variantClasses[variant]} ${className}`;
  return (
    <div className={classes}>
      <div className="ac-alert-icon-wrapper">{icons[variant]}</div>
      <div className="ac-alert-content">{children}</div>
      {onClose && (
        <Button
          variant="text"
          size="small"
          onClick={onClose}
          className="ac-alert-close"
        >
          <span aria-label="close" role="img">✖️</span>
        </Button>
      )}
    </div>
  );
};

export default Alert;
export { Alert };
