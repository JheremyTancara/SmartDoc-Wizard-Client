import React, { ReactNode } from 'react';
import '../../styles/popup/index.css';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className: string;
  modal: string;
  textClose: string;
  styleClose: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = (
  { 
    isOpen, onClose, className, modal, textClose, styleClose, children 
  }) => {
  if (!isOpen) return null;

  return (
    <div className={`${className}`}>
      <div className={`${modal}`}>
        <button onClick={onClose} className={`${styleClose}`}>
          {textClose}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
