import React, { useState, useEffect } from 'react';
import InputFieldLong from '../../common/InputFieldLong';
import InputField from '../../common/InputField';
import FirstInput from '../../common/popup/FirstInput';
import SecondInput from '../../common/popup/SecondInput';
import ThirdInput from '../../common/popup/ThirdInput';
import '../../../styles/popup/index.css';

interface ServiceSheetInputProps {
  establecimiento: string;
  setEstablecimiento: (value: string) => void;
  direccion: string;
  setDireccion: (value: string) => void; 
  ciudad: string;
  setCiudad: (value: string) => void;
  cite: string;
  setCite: (value: string) => void;
  remitente: string;
  setRemitente: (value: string) => void;
  prof_remitente: string;
  setProfRemitente: (value: string) => void;
  cant_alumnos: string;
  setCantAlumnos: (value: string) => void;
  nombres: string;
  setNombres: (value: string) => void;
  cursos: string;
  setCursos: (value: string) => void;
  contenido: string;
  setContenido: (value: string) => void;
  handleGenerate: () => void;
}

const ServiceSheetInput: React.FC<ServiceSheetInputProps> = ({
  establecimiento,
  setEstablecimiento,
  direccion,
  setDireccion,
  ciudad,
  setCiudad,
  cite,
  setCite,
  remitente,
  setRemitente,
  prof_remitente,
  setProfRemitente,
  cant_alumnos,
  setCantAlumnos,
  nombres,
  setNombres,
  cursos,
  setCursos,
  contenido,
  setContenido,
  handleGenerate
}) => {
  const [isFirstInput, setIsFirstInput] = useState(false);
  const [isSecondInput, setIsSecondInput] = useState(false);
  const [isThirdInput, setIsThirdInput] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedStatus = localStorage.getItem('isLogged') === 'true';
    setIsLogged(loggedStatus);
  }, []);

  const toggleIsFirstInput = () => {
    setIsFirstInput(!isFirstInput);
  };

  const toggleIsSecondInput = () => {
    setIsSecondInput(!isSecondInput);
  };

  const toggleIsThirdInput = () => {
    setIsThirdInput(!isThirdInput);
  };

  const handleButtonClick = () => {
    if (isLogged) {
      handleGenerate();
    } else {
      alert('Tienes que estar logueado.');
    }
  };

  return (
    <div>
      <div className='flex flex-row'>
        <div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2'>ESTABLECIMIENTO*:</div>
            <InputField 
              value={establecimiento}
              onChange={setEstablecimiento}
              placeholder="Establecimiento"
            />
            <div className='container-label mr-1 mt-2 ml-1'>DIRECCION*:</div>
            <InputField 
              value={direccion}
              onChange={setDireccion}
              placeholder="Direccion"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2'>CIUDAD*:</div>
            <InputField 
              value={ciudad}
              onChange={setCiudad}
              placeholder="Ciudad"
            />
            <div className='container-label mr-1 mt-2 ml-1'>CITE*:</div>
            <InputField 
              value={cite}
              onChange={setCite}
              placeholder="Cite"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>REMITENTE*:</div>
            <InputField 
              value={remitente}
              onChange={setRemitente}
              placeholder="Remitente"
            />
            <div className='container-label mr-1 mt-2 ml-1'>PROF. DEL REMITENTE:</div>
            <InputField 
              value={prof_remitente}
              onChange={setProfRemitente}
              placeholder="Prof. Remitente"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>CANT. DE ALUMNOS*:</div>
            <InputField 
              value={cant_alumnos}
              onChange={setCantAlumnos}
              placeholder="Cantidad de Alumnos"
            />
            <div className="tooltip-container">    
              <button className='container-label mr-1 mt-2 ml-1' onClick={toggleIsFirstInput}>NOMBRES*:</button>
              <span className="tooltip-text">Escriba los nombres...</span>
            </div>
            {isFirstInput && <FirstInput isOpen={isFirstInput} textModal='Escriba los nombres...' toggleModal={toggleIsFirstInput} onSave={setNombres} />}  
            <InputField 
              value={nombres}
              onChange={setNombres}
              placeholder="Escriba los nombres..."
            />
          </div>
        </div>
        <div>
          <div className="tooltip-container">
            <button className='container-label-two padding-14 mr-1 mt-2 ml-1' onClick={toggleIsSecondInput}>CURSOS*:</button>
            <span className="tooltip-text">Escriba los cursos de los alumnos...</span>
          </div>
          {isSecondInput && <SecondInput isOpen={isSecondInput} textModal='Escriba los cursos de los alumnos...' toggleModal={toggleIsSecondInput} onSave={setCursos} />}
          <InputFieldLong 
            value={cursos}
            onChange={setCursos}
            placeholder="Escriba los cursos de los alumnos..."
          />
          <div className="tooltip-container">
            <button className='container-label-two padding-8 mr-1 mt-2 ml-1' onClick={toggleIsThirdInput}>CONTENIDO:</button>
            <span className="tooltip-text">Escriba el contenido de la hoja de servicio...</span>
          </div>
          {isThirdInput && <ThirdInput isOpen={isThirdInput} textModal='Escriba el contenido de la hoja de servicio...' toggleModal={toggleIsThirdInput} onSave={setContenido} />}
          <InputFieldLong 
            value={contenido}
            onChange={setContenido}
            placeholder="Escriba el contenido de la hoja de servicio..."
          />
        </div>
      </div>
      <div className='btn-container ml-30 mt-2'>
        <button onClick={handleButtonClick}>Generate DOCX</button>
      </div>
    </div>
  );
};

export default ServiceSheetInput;
