import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ViewModels from '../../../common/popup/ViewModels';
import FormatConversion from '../../../common/popup/FormatConversion';
import img from '../../../../assets/img_link';
import '../../../../styles/layout/index.css';
import '../../../../styles/paddings/index.css';

const Square: React.FC = () => {
  const [isModelOpen, setIsModel] = useState(false);
  const [isFormatConvOpen, setIsFormatConv] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoggedAdministrator, setIsLoggedAdministrator] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedStatus = localStorage.getItem('isLogged') === 'true';
    const loggedAdminStatus = localStorage.getItem('isLoggedAdministrator') === 'true';
    setIsLogged(loggedStatus);
    setIsLoggedAdministrator(loggedAdminStatus);
  }, []);

  const toggleModal = () => {
    setIsModel(!isModelOpen);
  };

  const toggleFormatConv = () => {
    setIsFormatConv(!isFormatConvOpen);
  };

  const handleClick = () => {
    console.log('hola');
  };

  const clickGenerateDocument = () => {
    navigate('/generate-document');
  };

  const clickDocHistory = () => {
    if (isLogged) {
      navigate('/doc-history');
    } else {
      alert('Tienes que estar logueado para acceder al historial de documentos.');
    }
  };

  const clickManagerData = () => {
    if (isLogged && isLoggedAdministrator) {
      navigate('/data-manager');
    } else {
      alert('Tienes que estar logueado y ser administrador para acceder al gestor de datos.');
    }
  };

  return (
    <div className='body-color'>
      <div className="square-container">
        <div className="square">
          <div className="mt-negative-box"> 
            <img src={img.automation_doc} width="130" height="130" className="ml-2"/>
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={clickGenerateDocument}>
              Automátizacion de Documentos
            </button>
            <h1 className="size-text-16xl font-bold gray-color justify-text max-h-box-text ml-2">
              Genera documentos automáticamente a partir de formularios rellenados por el usuario, ahorrando tiempo y minimizando errores.
            </h1>
          </div>
        </div>

        <div className="square">
          <div className="mt-negative-box"> 
            <img src={img.view_model} width="130" height="130" className="ml-2"/>
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={toggleModal}>
              Visualización de Plantillas
            </button>
            {isModelOpen && <ViewModels isOpen={isModelOpen} toggleModal={toggleModal} />}
            <h1 className="size-text-16xl font-bold gray-color justify-text max-h-box-text ml-2">
              Visualiza una selección de plantillas preconfiguradas para diferentes tipos de documentos.
            </h1>
          </div>
        </div>

        <div className="square">
          <div className="mt-negative-box"> 
            <img src={img.format_conv} width="130" height="130" className="ml-2"/>
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={toggleFormatConv}>
              Conversión de Formato
            </button>
            {isFormatConvOpen && <FormatConversion isOpen={isFormatConvOpen} toggleModal={toggleFormatConv} />}
            <h1 className="size-text-16xl font-bold gray-color justify-text max-h-box-text ml-2">
              Facilita la conversión de documentos entre diferentes formatos, como de Word a PDF.
            </h1>
          </div>
        </div>

        <div className="square">
          <div className="mt-negative-box"> 
            <img src={img.doc_customization} width="130" height="130" className="ml-2"/>
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={handleClick}>
              Personalización de Documentos
            </button>
            <h1 className="size-text-16xl font-bold gray-color justify-text max-h-box-text ml-2">
              Ajusta el diseño y formato de los documentos, incluyendo fuentes, colores, y disposición de elementos, para adaptarse a tus necesidades.
            </h1>
          </div>
        </div>

        <div className="square">
          <div className="mt-negative-box"> 
            <img src={img.doc_history} width="130" height="130" className="ml-2"/>
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={clickDocHistory}>
              Historial de Documentos 
            </button>
            <h1 className="size-text-16xl font-bold gray-color justify-text max-h-box-text ml-2">
              Mantiene un registro detallado de todos los documentos creados y modificados.
            </h1>
          </div>
        </div>

        <div className="square">
          <div className="mt-negative-box"> 
            <img src={img.data_manager} width="130" height="130" className="ml-2"/>
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={clickManagerData}>
              Gestor de Datos
            </button>
            <h1 className="size-text-16xl font-bold gray-color justify-text max-h-box-text ml-2">
              Centraliza la información relevante, con acceso exclusivo para el administrador.
            </h1>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Square;
