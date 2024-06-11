import React, { useState } from 'react';
import Modal from '../Modal';
import PasswordInput from '../PasswordInput'; 
import ManageAccounts from '../../pages/base/account/manageAccounts';

interface AdministratorProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const Administrator: React.FC<AdministratorProps> = ({ isOpen, toggleModal }) => {
  const { handleLogin } = ManageAccounts();

  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const closeModal = () => {
    toggleModal();
  };

  const handleSignIn = () => {
    const adminAccount = {
      email: 'admin@gmail.com',
      password: 'password',
    };

    if (correoElectronico === adminAccount.email && contrasenia === adminAccount.password) {
      alert('Inicio de sesión exitoso');
      handleLogin(correoElectronico, contrasenia);
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('isLoggedAdministrator', 'true');
      closeModal();
      window.location.reload(); 
      closeModal();
    } else {
      setErrorMessage('El inicio de sesión falló. Verifique sus credenciales.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className={'overlay'} modal={'modal-signup'} textClose={'X'} styleClose={'closeButton'}>
      <h1 className='title-signup md-1'>SESIÓN DEL ADMINISTRADOR</h1>
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
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <button className='btn-text-signup' onClick={handleSignIn}>Iniciar Sesión</button>
    </Modal>
  );
};

export default Administrator;
