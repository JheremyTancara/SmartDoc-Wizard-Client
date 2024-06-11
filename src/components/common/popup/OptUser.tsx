import React, { useState } from 'react';
import Modal from '../Modal';
import '../../../styles/paddings/index.css';
import '../../../styles/layout/index.css';
import '../../../styles/colors/index.css';

interface OptUserProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const OptUser: React.FC<OptUserProps> = ({ isOpen, toggleModal }) => {
  const closeModal = () => {
    toggleModal();
  };

  const handleLogoutClick = () => {
    localStorage.setItem('isLogged', 'false');
    localStorage.setItem('isLoggedAdministrator', 'false');
    localStorage.setItem('userLogged', 'none');
    closeModal();
    window.location.reload(); 
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className={'overlay-account'} modal={'modal-user mr-13'} textClose={'X'} styleClose={'closeButton'}>
      <div className="flex flex-col items-center">
        <p className="image-account">Gracias por ser un miembro de esta gran familia</p>
        <button className='button-account bg-btn-user-color mt-05' onClick={handleLogoutClick}>Cerrar Sesión</button>
      </div>
    </Modal>
  );
};

export default OptUser;
