import React, { useState } from 'react';
import Modal from '../Modal';

interface ThirdInputProps {
  isOpen: boolean;
  textModal: string;
  toggleModal: () => void;
  onSave: (value: string) => void;
}

const ThirdInput: React.FC<ThirdInputProps> = ({ isOpen, textModal, toggleModal, onSave }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSave = () => {
    onSave(inputValue);
    toggleModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={toggleModal} className={'overlay'} modal={'modal-btn'} textClose={'X'} styleClose={'closeButton'}>
      <div className='flex flex-col items-center'>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder= {textModal}
          className='box-text-generate-doc'
          maxLength={1000}
        />
        <button className='btn-container mt-1' onClick={handleSave}>Save</button>
      </div>
    </Modal>
  );
};

export default ThirdInput;
