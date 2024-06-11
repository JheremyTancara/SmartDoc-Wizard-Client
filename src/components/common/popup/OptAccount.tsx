import React, { useState } from 'react';
import Modal from '../Modal';
import '../../../styles/paddings/index.css';
import '../../../styles/layout/index.css';
import '../../../styles/colors/index.css';
import SignUp from './SignUp';
import LogIn from './LogIn';


interface OptAccountProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const OptAccount: React.FC<OptAccountProps> = ({ isOpen, toggleModal }) => {
  const [openLogIn, setLogIn] = useState(false);
  const [openSignUp, setSignUp] = useState(false);

  const closeModal = () => {
    toggleModal();
  };

  const toggleLogIn = () => {
    setLogIn(!openLogIn);
    
  };

  const toggleSignUp = () => {
    setSignUp(!openSignUp);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} className={'overlay-account'} modal={'modal-account mr-13'} textClose={'X'} styleClose={'closeButton'}>
        <div className="flex flex-col items-center">
          <p className="image-account">Conviértete en miembro y únete a esta gran familia</p>
          <button className='button-account bg-btn-login-color mt-05' onClick={toggleLogIn}>Registrarse</button>
          <button className='button-account bg-btn-signup-color mt-05' onClick={toggleSignUp}>Crear una cuenta</button>
        </div>
      </Modal>
      {openLogIn && <LogIn isOpen={openLogIn} toggleModal={toggleLogIn} />}
      {openSignUp && <SignUp isOpen={openSignUp} toggleModal={toggleSignUp} />}
    </>
  );
};

export default OptAccount;
