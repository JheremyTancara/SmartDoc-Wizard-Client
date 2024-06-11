import React, { useState } from 'react';
import Modal from '../Modal';
import '../../../styles/paddings/index.css';
import '../../../styles/layout/index.css';
import '../../../styles/colors/index.css';
import Administrator from './Administrator';

interface OptAdministratorProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const OptAdministrator: React.FC<OptAdministratorProps> = ({ isOpen, toggleModal }) => {

  const [openAdministrator, setAdministrator] = useState(false);

  const closeModal = () => {
    toggleModal();
  };

  const toggleAdministrator = () => {
    setAdministrator(!openAdministrator);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className={'overlay-administrator'} modal={'modal-administrator mr-6'} textClose={'X'} styleClose={'closeButton'}>
      <div className="flex flex-col items-center">
        <button className='button-account bg-btn-login-color mt-05' onClick={toggleAdministrator}>Entrar como Administrador</button>
        {openAdministrator && <Administrator isOpen={openAdministrator} toggleModal={toggleAdministrator} />}
      </div>
    </Modal>
  );
};

export default OptAdministrator;
