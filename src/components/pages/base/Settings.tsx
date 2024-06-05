import React from 'react';
import Header from './header/Header';

const Settings: React.FC = () => {
  return (
    <div className='body-color min-color'>
      <Header />
      <div className='configurate-container'>
        Configuraciones
      </div>
    </div>  
  );
}

export default Settings;
