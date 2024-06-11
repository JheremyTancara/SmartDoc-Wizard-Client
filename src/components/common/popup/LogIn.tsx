import React, { useState } from 'react';
import Modal from '../Modal';
import PasswordInput from '../PasswordInput';
import ManageAccounts from '../../pages/base/account/manageAccounts'; 

interface LogInProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const LogIn: React.FC<LogInProps> = ({ isOpen, toggleModal }) => {
  const { handleLogin } = ManageAccounts();

  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const closeModal = () => {
    toggleModal();
  };

  const handleSignIn = () => {
    const success = handleLogin(correoElectronico, contrasenia);
    if (success) {
      alert('Inicio de sesión exitoso');
      closeModal();
      window.location.reload(); 
    } else {
      alert('El inicio de sesión falló. Verifique sus credenciales.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className={'overlay'} modal={'modal-signup'} textClose={'X'} styleClose={'closeButton'}>
      <h1 className='title-signup md-1'>INICIAR SESIÓN</h1>
      <div>
        <p className='text-signup'>Correo Electrónico</p>
        <input 
          type="email" 
          value={correoElectronico} 
          onChange={(e) => setCorreoElectronico(e.target.value)} 
          className='box-text-signup md-1'
          placeholder="Correo Electrónico" 
        />
        <p className='text-signup'>Contraseña</p>
        <PasswordInput
          value={contrasenia}
          onChange={setContrasenia}
          placeholder="Contraseña"
          className='md-1'
        />
      </div>
      <button className='btn-text-signup' onClick={handleSignIn}>Iniciar Sesión</button>
    </Modal>
  );
};

export default LogIn;
