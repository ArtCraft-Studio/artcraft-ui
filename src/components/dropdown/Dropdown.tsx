import React, { useState, useRef, useEffect } from 'react';
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
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, children, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`ac-dropdown ${className}`} ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="ac-dropdown__trigger">
                {trigger}
            </div>

            {isOpen && (
                <div className="ac-dropdown__menu">
                    {children}
                </div>
            )}
        </div>
    );
};

const DropdownItem: React.FC<DropdownItemProps> = ({
    children,
    onClick,
    className = '',
    danger = false
}) => {
    const baseClasses = 'ac-dropdown__item';
    const dangerClasses = danger ? 'ac-dropdown__item--danger' : '';
    const classes = `${baseClasses} ${dangerClasses} ${className}`;

    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    );
};

const DropdownDivider: React.FC = () => {
    return <div className="ac-dropdown__divider" />;
};

const DropdownWithComponents = Object.assign(Dropdown, {
    Item: DropdownItem,
    Divider: DropdownDivider,
});

export default DropdownWithComponents;
