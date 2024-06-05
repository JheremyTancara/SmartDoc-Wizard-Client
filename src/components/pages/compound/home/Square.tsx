import React, { useState } from 'react';
import { BrowserRouter as Navigate, useNavigate } from 'react-router-dom'; 
import ViewModels from '../../../common/popup/ViewModels';
import FormatConversion from '../../../common/popup/FormatConversion';
import img from '../../../../assets/img_link'
import '../../../../styles/layout/index.css';
import '../../../../styles/paddings/index.css';


const Square: React.FC = () => {

  const [isModelOpen, setIsModel] = useState(false);
  const [isFormatConvOpen, setIsFormatConv] = useState(false);

  const toggleModal = () => {
    setIsModel(!isModelOpen);
  };

  const toggleFormatConv = () => {
    setIsFormatConv(!isFormatConvOpen);
  };

  const handleClick = () => {
    console.log('hola');
  };

  const navigate = useNavigate();

  const clickGenerateDocument = () => {
    navigate('/generate-document');
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
              Visialización de Plantillas
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
              Facilita la conversión de documentos entre diferentes formatos, como de Word a PDF.            </h1>
          </div>
        </div>

        <div className="square">
          <div className="mt-negative-box"> 
            <img src={img.doc_customization} width="130" height="130" className="ml-2"/>
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={handleClick}>
              Personalización de documentos
            </button>
            <h1 className="size-text-16xl font-bold gray-color justify-text max-h-box-text ml-2">
              Ajusta el diseño y formato de los documentos, incluyendo fuentes, colores, y disposición de elementos, para adaptarse a tus necesidades.            </h1>
          </div>
        </div>

        <div className="square">
          <div className="mt-negative-box"> 
            <img src={img.doc_history} width="130" height="130" className="ml-2"/>
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={handleClick}>
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
            <button className="bg-transparent-color size-text-8xl font-bold black-color padding-btn border-radius ml-1-5" onClick={handleClick}>
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
}

export default Square;
