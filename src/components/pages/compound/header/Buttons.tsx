import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import img from '../../../../assets/img_link';

const Buttons: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonNavigateAboutOf = () => {
    navigate('/about-of');
  };

  const handleButtonNavigateGenerateDocument = () => {
    navigate('/generate-document');
  };

  const handleButtonNavigateSettings = () => {
    navigate('/settings');
  };

  const handleButtonNavigateHome = () => {
    navigate('/home');
  };

  const handleButtonClickAccount = () => {
  };

  const handleButtonClickAdministrator = () => {
  };

  const btnClassName = 'bg-transparent-color font-bold padding-btn border-radius inline';
  const whiteColor = 'white-color';
  const grayLightColor = 'gray-light-color';

  return (
    <div className="flex header-color py-4">
      <img src={img.menu} width="30" height="30" className="inline ml-11"/>
      <button className={`${btnClassName} ${whiteColor} mr-4`} onClick={handleButtonNavigateHome}>
        MENU
      </button>
      <button className={`${btnClassName} ${grayLightColor} mr-1`} onClick={handleButtonNavigateGenerateDocument}>
        GENERACION DOCUMENTO
      </button>
      <h1 className={`${btnClassName} ${grayLightColor} mt-02 mr-1`}>|</h1>
      <button className={`${btnClassName} ${grayLightColor} mr-1`} onClick={handleButtonNavigateSettings}>
        CONFIGURACION
      </button>
      <h1 className={`${btnClassName} ${grayLightColor} mt-02 mr-1`}>|</h1>
      <button className={`${btnClassName} ${grayLightColor} mr-30`} onClick={handleButtonNavigateAboutOf}>
        ACERCA DE
      </button>
      
      <img src={img.user} width="30" height="25" className="inline ml-10"/>
      <button className={`${btnClassName} ${whiteColor} mr-1`} onClick={handleButtonClickAccount}>
        MI CUENTA
      </button>
      <h1 className={`${btnClassName} ${grayLightColor} mt-02 mr-1`}>|</h1>
      <button className={`${btnClassName} ${grayLightColor}`} onClick={handleButtonClickAdministrator}>
        ENTRAR COMO ADMINISTRADOR
      </button>
    </div>
  );
}

export default Buttons;
