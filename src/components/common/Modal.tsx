import React, { ReactNode } from 'react';
import '../../styles/popup/index.css';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose} className="closeButton">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
