import React from 'react';
import Modal from '../Modal';
import DocxToPdfConverter from '../../pages/compound/dox_to_pdf/DoxToPdf';

interface FormatConversionProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const FormatConversion: React.FC<FormatConversionProps> = ({ isOpen, toggleModal }) => {
  const closeModal = () => {
    toggleModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
        <DocxToPdfConverter />

    </Modal>
  );
};

export default FormatConversion;
