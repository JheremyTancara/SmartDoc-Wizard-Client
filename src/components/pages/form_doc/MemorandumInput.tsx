import React, { useState, useEffect } from 'react';
import InputFieldLong from '../../common/InputFieldLong';
import InputField from '../../common/InputField';
import FirstInput from '../../common/popup/FirstInput';
import SecondInput from '../../common/popup/SecondInput';
import '../../../styles/popup/index.css';

interface MemorandumInputProps {
  cite: string;
  setCite: (value: string) => void;
  remitente: string;
  setRemitente: (value: string) => void;
  ciudad: string;
  setCiudad: (value: string) => void;
  destinatario: string;
  setDestinatario: (value: string) => void;
  prof_remitente: string;
  setProfRemitente: (value: string) => void;
  gen_destinatario: string;
  setGenDestinatario: (value: string) => void;
  prof_destinatario: string;
  setProfDestinatario: (value: string) => void;
  asunto: string;
  setAsunto: (value: string) => void;  
  contenido: string;
  setContenido: (value: string) => void;
  handleGenerate: () => void;
}

const MemorandumInput: React.FC<MemorandumInputProps> = ({
  cite,
  setCite,
  remitente,
  setRemitente,
  ciudad,
  setCiudad,
  destinatario,
  setDestinatario,
  prof_remitente,
  setProfRemitente,
  gen_destinatario,
  setGenDestinatario,
  prof_destinatario,
  setProfDestinatario,
  asunto,
  setAsunto,
  contenido,
  setContenido,
  handleGenerate
}) => {
  const [isFirstInput, setIsFirstInput] = useState(false);
  const [isSecondInput, setIsSecondInput] = useState(false);
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
            <div className='container-label mr-1 mt-2 ml-2'>CIUDAD*:</div>
            <InputField 
              value={ciudad}
              onChange={setCiudad}
              placeholder="Ciudad"
            />
            <div className='container-label mr-1 mt-2 ml-1'>DESTINATARIO*:</div>
            <InputField 
              value={destinatario}
              onChange={setDestinatario}
              placeholder="Destinatario"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>PROF. DEL REMITENTE:</div>
            <InputField 
              value={prof_remitente}
              onChange={setProfRemitente}
              placeholder="Prof. Remitente"
            />
            <div className='container-label mr-1 mt-2 ml-1'>GEN. DEL DESTINATARIO:</div>
            <InputField 
              value={gen_destinatario}
              onChange={setGenDestinatario}
              placeholder="Genero Destinatario"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>PROF. DEL DESTINATARIO:</div>
            <InputField 
              value={prof_destinatario}
              onChange={setProfDestinatario}
              placeholder="Prof. del Destinatario"
            />
          </div>
        </div>
        <div>
          <div className="tooltip-container">
            <button className='container-label-two padding-14 mr-1 mt-2 ml-1' onClick={toggleIsFirstInput}>ASUNTO*:</button>
            <span className="tooltip-text">Escriba el asunto....</span>
          </div>
          {isFirstInput && <FirstInput isOpen={isFirstInput} textModal='Escribe el asunto...' toggleModal={toggleIsFirstInput} onSave={setAsunto} />}
          <InputFieldLong 
            value={asunto}
            onChange={setAsunto}
            placeholder="Escribe el asunto..."
          />
          <div className="tooltip-container">
            <button className='container-label-two padding-14 mr-1 mt-2 ml-1' onClick={toggleIsSecondInput}>CONTENIDO:</button>
            <span className="tooltip-text">Escriba el contenido del memorandum...</span>
          </div>
          {isSecondInput && <SecondInput isOpen={isSecondInput} textModal='Escribe el contenido del memorandum...' toggleModal={toggleIsSecondInput} onSave={setContenido} />}
          <InputFieldLong 
            value={contenido}
            onChange={setContenido}
            placeholder="Escribe el contenido del memorandum..."
          />
        </div>
      </div>
      <div className='btn-container ml-30 mt-2'>
        <button onClick={handleButtonClick}>Generate DOCX</button>
      </div>
    </div>
  );
};

export default MemorandumInput;
