import React, { useState } from 'react';
import Modal from '../Modal';
import PasswordInput from '../PasswordInput';
import ManageAccounts from '../../pages/base/account/manageAccounts'; 

interface SignUpProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ isOpen, toggleModal }) => {
  const { addAccount } = ManageAccounts();

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [confirmarContrasenia, setConfirmarContrasenia] = useState('');

  const closeModal = () => {
    toggleModal();
  };

  const handleCreateAccount = () => {
    if (!correoElectronico.includes('@gmail.com')) {
      alert('El correo debe ser @gmail.com');
      return;
    }

    if (nombreUsuario.length <= 3) {
      alert('El nombre de usuario debe tener más de 3 caracteres');
      return;
    }

    if (contrasenia !== confirmarContrasenia) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const result = addAccount({
      username: nombreUsuario,
      email: correoElectronico,
      password: contrasenia,
      disabled: false
    });

    if (result.success) {
      alert(result.message);
      closeModal();
    } else {
      alert(result.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className={'overlay'} modal={'modal-signup'} textClose={'X'} styleClose={'closeButton'}>
      <h1 className='title-signup md-1'>CREAR CUENTA</h1>
      <div>
        <p className='text-signup'>Nombre de Usuario</p>
        <input 
          type="text" 
          value={nombreUsuario} 
          onChange={(e) => setNombreUsuario(e.target.value)} 
          className='box-text-signup md-1'
          placeholder="Nombre Usuario" 
        />
        <p className='text-signup'>Correo Electrónico</p>
        <input 
          type="text" 
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
        <p className='text-signup'>Confirmar Contraseña</p>
        <PasswordInput
          value={confirmarContrasenia}
          onChange={setConfirmarContrasenia}
          placeholder="Confirmar Contraseña"
          className='md-1'
        />
      </div>
      <button onClick={handleCreateAccount} className='btn-text-signup'>Crear cuenta</button>
    </Modal>
  );
};

export default SignUp;
