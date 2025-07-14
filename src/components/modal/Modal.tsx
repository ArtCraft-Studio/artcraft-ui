import React, { useEffect } from 'react';
import Button from '../buttons/Button';
import './Modal.css';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export interface ModalHeaderProps {
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
}

export interface ModalBodyProps {
    children: React.ReactNode;
    className?: string;
}

export interface ModalFooterProps {
    children: React.ReactNode;
    className?: string;
}

const Modal = ({ isOpen, onClose, children, size = 'md', className = '' }: ModalProps) => {
    const sizeClasses = {
        sm: 'ac-modal--sm',
        md: 'ac-modal--md',
        lg: 'ac-modal--lg',
        xl: 'ac-modal--xl'
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);
    return (
        <div className={`ac-modal-overlay${isOpen ? ' ac-modal-overlay--open' : ''}`}>
            <div className="ac-modal-center">
                <div className={`ac-modal-backdrop${isOpen ? ' ac-modal-backdrop--open' : ''}`} onClick={onClose} />
                <div className={`ac-modal${isOpen ? ' ac-modal--open' : ''} ${sizeClasses[size]} ${className}`}>{children}</div>
            </div>
        </div>
    );
};

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, onClose, className = '' }) => (
    <div className={`ac-modal__header ${className}`}>
        <h3 className="ac-modal__title">{children}</h3>
        {onClose && (
            <Button variant="text" size="small" onClick={onClose} className="ac-modal__close">
                <span aria-label="close" role="img">✖️</span>
            </Button>
        )}
    </div>
);
const ModalBody: React.FC<ModalBodyProps> = ({ children, className = '' }) => <div className={`ac-modal__body ${className}`}>{children}</div>;
const ModalFooter: React.FC<ModalFooterProps> = ({ children, className = '' }) => (
    <div className={`ac-modal__footer ${className}`}>{children}</div>
);
const ModalWithComponents = Object.assign(Modal, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });
export default ModalWithComponents;
