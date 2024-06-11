import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import img from '../../../../assets/img_link';
import OptAccount from '../../../common/popup/OptAccount';
import OptAdministrator from '../../../common/popup/OptAdministrator';
import OptUser from '../../../common/popup/OptUser';

const Buttons: React.FC = () => {
  const navigate = useNavigate();

  const [openAccount, setOpenAccount] = useState(false);
  const [openAdministrator, setOpenAdministrator] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedStatus = localStorage.getItem('isLogged');
    setIsLogged(loggedStatus === 'true');
  }, []);

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
    if (!openAccount) {
      setOpenAdministrator(false);
    }
    setOpenAccount(!openAccount);
  };

  const handleButtonClickAdministrator = () => {
    if (!openAdministrator) {
      setOpenAccount(false);
    }
    setOpenAdministrator(!openAdministrator);
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
      {isLogged ? (
        <>
          <button className={`${btnClassName} ${whiteColor} mr-1`} onClick={handleButtonClickAccount} disabled={openAdministrator}>
            MI CUENTA
          </button>
          {openAccount && <OptUser isOpen={openAccount} toggleModal={handleButtonClickAccount} />}
        </>
      ) : (
        <>
          <button className={`${btnClassName} ${whiteColor} mr-1`} onClick={handleButtonClickAccount} disabled={openAdministrator}>
            MI CUENTA
          </button>
          {openAccount && <OptAccount isOpen={openAccount} toggleModal={handleButtonClickAccount} />}
        </>
      )}
      
      <h1 className={`${btnClassName} ${grayLightColor} mt-02 mr-1`}>|</h1>
      <button className={`${btnClassName} ${grayLightColor}`} onClick={handleButtonClickAdministrator} disabled={openAccount}>
        ENTRAR COMO ADMINISTRADOR
      </button>
      {openAdministrator && <OptAdministrator isOpen={openAdministrator} toggleModal={handleButtonClickAdministrator} />}
    </div>
  );
}

export default Buttons;
