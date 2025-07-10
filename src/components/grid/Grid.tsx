import React from 'react';
import './Grid.css';

export interface GridProps {
    children: React.ReactNode;
    className?: string;
    cols?: 1 | 2 | 3 | 4 | 6 | 12;
    gap?: 1 | 2 | 3 | 4 | 5 | 6;
    responsive?: {
        sm?: 1 | 2 | 3 | 4 | 6 | 12;
        md?: 1 | 2 | 3 | 4 | 6 | 12;
        lg?: 1 | 2 | 3 | 4 | 6 | 12;
    };
}

export interface RowProps {
    children: React.ReactNode;
    className?: string;
    gap?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ColProps {
    children: React.ReactNode;
    className?: string;
    xs?: number | 'auto';
    sm?: number | 'auto';
    md?: number | 'auto';
    lg?: number | 'auto';
    xl?: number | 'auto';
}

const Grid: React.FC<GridProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  cols = 1,
  gap = 4,
  responsive,
  ...rest // ✅ Добавляем пропсы, которые не объявлены напрямую (например, data-testid)
}) => {
  const baseClass = 'ac-grid';
  const colsClass = `ac-grid-cols-${cols}`;
  const gapClass = `ac-grid-gap-${gap}`;

  let responsiveClasses = '';
  if (responsive) {
    if (responsive.sm) responsiveClasses += ` ac-grid-sm-cols-${responsive.sm}`;
    if (responsive.md) responsiveClasses += ` ac-grid-md-cols-${responsive.md}`;
    if (responsive.lg) responsiveClasses += ` ac-grid-lg-cols-${responsive.lg}`;
  }

  return (
    <div className={`${baseClass} ${colsClass} ${gapClass}${responsiveClasses} ${className}`} {...rest}>
      {children}
    </div>
  );
};


export const Row: React.FC<RowProps> = ({ children, className = '', gap = 4 }) => {
    return (
        <div className={`ac-row ac-row-gap-${gap} ${className}`}>
            {children}
        </div>
    );
};

export const Col: React.FC<ColProps> = ({
    children,
    className = '',
    xs,
    sm,
    md,
    lg,
    xl
}) => {
    let colClasses = '';

    if (xs) colClasses += xs === 'auto' ? ' ac-col-xs-auto' : ` ac-col-xs-${xs}`;
    if (sm) colClasses += sm === 'auto' ? ' ac-col-sm-auto' : ` ac-col-sm-${sm}`;
    if (md) colClasses += md === 'auto' ? ' ac-col-md-auto' : ` ac-col-md-${md}`;
    if (lg) colClasses += lg === 'auto' ? ' ac-col-lg-auto' : ` ac-col-lg-${lg}`;
    if (xl) colClasses += xl === 'auto' ? ' ac-col-xl-auto' : ` ac-col-xl-${xl}`;

    return (
        <div className={`${colClasses} ${className}`}>
            {children}
        </div>
    );
};

export const Container: React.FC<{ children: React.ReactNode; fluid?: boolean; className?: string }> = ({
    children,
    fluid = false,
    className = ''
}) => {
    const containerClass = fluid ? 'ac-container-fluid' : 'ac-container';
    return (
        <div className={`${containerClass} ${className}`}>
            {children}
        </div>
    );
};

export default Grid;
