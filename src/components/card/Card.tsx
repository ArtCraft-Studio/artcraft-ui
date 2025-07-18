import React from 'react';
import './Card.css';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}

export interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, className = '', padding = 'md', ...rest }: CardProps & React.HTMLAttributes<HTMLDivElement>) => {
  const paddingClasses = {
    none: '',
    sm: 'ac-card--p-sm',
    md: 'ac-card--p-md',
    lg: 'ac-card--p-lg',
  };
  const defaultClasses = 'ac-card';
  const classes = `${defaultClasses} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};


const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
    const defaultClasses = 'ac-card__header';
    const classes = `${defaultClasses} ${className}`;
    return <div className={classes}>{children}</div>;
};

const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
    const classes = `ac-card__body ${className}`;
    return <div className={classes}>{children}</div>;
};

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
    const defaultClasses = 'ac-card__footer';
    const classes = `${defaultClasses} ${className}`;
    return <div className={classes}>{children}</div>;
};

const CardWithComponents = Object.assign(Card, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
});

export default CardWithComponents;
