import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Dropdown.css';

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  danger?: boolean;
  tabIndex?: number;
  role?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
  className = '',
  danger = false,
  ...rest
}) => {
  const classes = `ac-dropdown__item${danger ? ` ac-dropdown__item--danger` : ''}${className ? ` ${className}` : ''}`;
  return (
    <div
      className={classes}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};
DropdownItem.displayName = 'DropdownItem';

const DropdownDivider: React.FC = () => <div className="ac-dropdown__divider" role="separator" />;
DropdownDivider.displayName = 'DropdownDivider';

const Dropdown: React.FC<DropdownProps> = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === 'ArrowDown' && menuRef.current) {
        const first = menuRef.current.querySelector('[role="menuitem"]');
        (first as HTMLElement)?.focus();
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);
  const handleMenuKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab') {
      const items = menuRef.current?.querySelectorAll('[role="menuitem"]');
      if (!items || items.length === 0) return;
      const first = items[0] as HTMLElement;
      const last = items[items.length - 1] as HTMLElement;
      if (event.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          event.preventDefault();
        }
      }
    }
  }, []);
  const handleTriggerClick = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div className="ac-dropdown-wrapper">
      <div
        className={`ac-dropdown${className ? ` ${className}` : ''}`}
        ref={dropdownRef}
      >
        <div
          className={`ac-dropdown__trigger`}
          ref={triggerRef}
          tabIndex={0}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={handleTriggerClick}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
              setIsOpen(true);
              setTimeout(() => {
                const first = menuRef.current?.querySelector('[role="menuitem"]');
                (first as HTMLElement)?.focus();
              }, 0);
              e.preventDefault();
            }
          }}
          role="button"
        >
          {trigger}
        </div>
        <div
          className={`ac-dropdown__menu${isOpen ? ` ac-dropdown__menu--open` : ''}`}
          ref={menuRef}
          role="menu"
          tabIndex={-1}
          aria-hidden={!isOpen}
          onKeyDown={handleMenuKeyDown}
        >
          {React.Children.map(children, (child, idx) => {
          if (
            React.isValidElement(child) &&
            ((child.type as { displayName?: string }).displayName !== 'DropdownDivider')
          ) {
              return (
                <DropdownItem
                  {...child.props}
                  tabIndex={0}
                  role="menuitem"
                  onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                    child.props.onClick?.(e);
                    setIsOpen(false);
                  }}
                  key={idx}
                >
                  {child.props.children}
                </DropdownItem>
              );
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
};

const DropdownWithComponents = Object.assign(Dropdown, {
  Item: DropdownItem,
  Divider: DropdownDivider,
});

export default DropdownWithComponents;
