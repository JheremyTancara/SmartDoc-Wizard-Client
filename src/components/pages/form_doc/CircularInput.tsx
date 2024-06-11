import React, { useState, useEffect } from 'react';
import InputFieldLong from '../../common/InputFieldLong';
import InputField from '../../common/InputField';
import FirstInput from '../../common/popup/FirstInput';
import SecondInput from '../../common/popup/SecondInput';
import ThirdInput from '../../common/popup/ThirdInput';
import '../../../styles/popup/index.css';

interface CircularInputProps {
  cite: string;
  setCite: (value: string) => void;
  remitente: string;
  setRemitente: (value: string) => void;
  telf_remitente: string;
  setTelfRemitente: (value: string) => void;
  prof_remitente: string;
  setProfRemitente: (value: string) => void;
  ciudad: string;
  setCiudad: (value: string) => void;
  direccion: string;
  setDireccion: (value: string) => void;
  asunto: string;
  setAsunto: (value: string) => void;
  contenido: string;
  setContenido: (value: string) => void;
  destinatarios: string;
  setDestinatarios: (value: string) => void;
  prof_destinatarios: string;
  setProfDestinatarios: (value: string) => void; 
  handleGenerate: () => void;
}

const CircularInput: React.FC<CircularInputProps> = ({
  cite,
  setCite,
  remitente,
  setRemitente,
  telf_remitente,
  setTelfRemitente,
  prof_remitente,
  setProfRemitente,
  ciudad,
  setCiudad,
  direccion,
  setDireccion,
  asunto,
  setAsunto,
  contenido,
  setContenido,
  destinatarios,
  setDestinatarios,
  prof_destinatarios,
  setProfDestinatarios,
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
            <div className='container-label mr-1 mt-2 ml-2'>CITE*:</div>
            <InputField 
              value={cite}
              onChange={setCite}
              placeholder="Cite"
            />
            <div className='container-label mr-1 mt-2 ml-1'>REMITENTE*:</div>
            <InputField 
              value={remitente}
              onChange={setRemitente}
              placeholder="Remitente"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2'>TELF. DEL REMITENTE*:</div>
            <InputField 
              value={telf_remitente}
              onChange={setTelfRemitente}
              placeholder="Telf. Remitente"
            />
            <div className='container-label mr-1 mt-2 ml-1'>PROF. DEL REMITENTE:</div>
            <InputField 
              value={prof_remitente}
              onChange={setProfRemitente}
              placeholder="Prof. Remitente"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>CIUDAD*:</div>
            <InputField 
              value={ciudad}
              onChange={setCiudad}
              placeholder="Ciudad"
            />
            <div className='container-label mr-1 mt-2 ml-1'>DIRECCION*:</div>
            <InputField 
              value={direccion}
              onChange={setDireccion}
              placeholder="Direccion"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>ASUNTO*:</div>
            <InputField 
              value={asunto}
              onChange={setAsunto}
              placeholder="Asunto"
            />
            <div className="tooltip-container">    
              <button className='container-label mr-1 mt-2 ml-1' onClick={toggleIsFirstInput}>CONTENIDO:</button>
              <span className="tooltip-text">Escriba el contenido del circular....</span>
            </div>
            {isFirstInput && <FirstInput isOpen={isFirstInput} textModal='Escriba el contenido del circular...' toggleModal={toggleIsFirstInput} onSave={setContenido} />}  
            <InputField 
              value={contenido}
              onChange={setContenido}
              placeholder="Contenido"
            />
          </div>
        </div>
        <div>
          <div className="tooltip-container">
            <button className='container-label-two padding-14 mr-1 mt-2 ml-1' onClick={toggleIsSecondInput}>DESTINATARIOS*:</button>
            <span className="tooltip-text">Escriba los nombres de los destinatarios...</span>
          </div>
          {isSecondInput && <SecondInput isOpen={isSecondInput} textModal='Escriba los nombres de los destinatarios...' toggleModal={toggleIsSecondInput} onSave={setDestinatarios} />}
          <InputFieldLong 
            value={destinatarios}
            onChange={setDestinatarios}
            placeholder="Escriba los nombres de los destinatarios..."
          />
          <div className="tooltip-container">
            <button className='container-label-two padding-8 mr-1 mt-2 ml-1' onClick={toggleIsThirdInput}>PROF. DESTINATARIOS:</button>
            <span className="tooltip-text">Escriba la profesion de los destinatarios...</span>
          </div>
          {isThirdInput && <ThirdInput isOpen={isThirdInput} textModal='Escriba la profesion de los destinatarios...' toggleModal={toggleIsThirdInput} onSave={setProfDestinatarios} />}
          <InputFieldLong 
            value={prof_destinatarios}
            onChange={setProfDestinatarios}
            placeholder="Escriba la profesion de los destinatarios..."
          />
        </div>
      </div>
      <div className='btn-container ml-30 mt-2'>
        <button onClick={handleButtonClick}>Generate DOCX</button>
      </div>
    </div>
  );
};

export default CircularInput;
