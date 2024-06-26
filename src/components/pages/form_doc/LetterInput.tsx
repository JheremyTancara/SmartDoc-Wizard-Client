import React, { useState, useEffect } from 'react';
import InputFieldLong from '../../common/InputFieldLong';
import InputField from '../../common/InputField';
import FirstInput from '../../common/popup/FirstInput';
import SecondInput from '../../common/popup/SecondInput';
import '../../../styles/popup/index.css';

interface LetterInputProps {
  ciudad: string;
  setCiudad: (value: string) => void;
  destinatario: string;
  setDestinatario: (value: string) => void;
  gen_destinatario: string;
  setGenDestinatario: (value: string) => void;
  prof_destinatario: string;
  setProfDestinatario: (value: string) => void;
  empresa: string;
  setEmpresa: (value: string) => void;
  remitente: string;
  setRemitente: (value: string) => void;
  prof_remitente: string;
  setProfRemitente: (value: string) => void;
  telf_remitente: string;
  setTelfRemitente: (value: string) => void;
  asunto: string;
  setAsunto: (value: string) => void;
  cuerpoMensaje: string;
  setCuerpoMensaje: (value: string) => void;
  handleGenerate: () => void;
}

const LetterInput: React.FC<LetterInputProps> = ({
  ciudad,
  setCiudad,
  destinatario,
  setDestinatario,
  gen_destinatario,
  setGenDestinatario,
  prof_destinatario,
  setProfDestinatario,
  empresa,
  setEmpresa,
  remitente,
  setRemitente,
  prof_remitente,
  setProfRemitente,
  telf_remitente,
  setTelfRemitente,
  asunto,
  setAsunto,
  cuerpoMensaje,
  setCuerpoMensaje,
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
            <div className='container-label mr-1 mt-2 ml-2'>CIUDAD:</div>
            <InputField 
              value={ciudad}
              onChange={setCiudad}
              placeholder="Ciudad"
            />
            <div className='container-label mr-1 mt-2 ml-1'>EMPRESA:</div>
            <InputField 
              value={empresa}
              onChange={setEmpresa}
              placeholder="Empresa"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2'>DESTINATARIO*:</div>
            <InputField 
              value={destinatario}
              onChange={setDestinatario}
              placeholder="Destinatario"
            />
            <div className='container-label mr-1 mt-2 ml-1'>REMITENTE*:</div>
            <InputField 
              value={remitente}
              onChange={setRemitente}
              placeholder="Remitente"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>GEN. DEL DESTINATARIO:</div>
            <InputField 
              value={gen_destinatario}
              onChange={setGenDestinatario}
              placeholder="Gen. del Destinatario"
            />
            <div className='container-label mr-1 mt-2 ml-1'>PROF. DEL REMITENTE:</div>
            <InputField 
              value={prof_remitente}
              onChange={setProfRemitente}
              placeholder="Prof. Remitente"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>PROF. DEL DESTINATARIO:</div>
            <InputField 
              value={prof_destinatario}
              onChange={setProfDestinatario}
              placeholder="Prof. del Destinatario"
            />
            <div className='container-label mr-1 mt-2 ml-1'>TELF. DEL REMITENTE*:</div>
            <InputField 
              value={telf_remitente}
              onChange={setTelfRemitente}
              placeholder="Telf. del Remitente"
            />
          </div>
        </div>
        <div>
          <div className="tooltip-container">
            <button className='container-label-two padding-14 mr-1 mt-2 ml-1' onClick={toggleIsFirstInput}>ASUNTO:</button>
            <span className="tooltip-text">Escriba el asunto....</span>
          </div>
          {isFirstInput && <FirstInput isOpen={isFirstInput} textModal='Escribe el asunto...' toggleModal={toggleIsFirstInput} onSave={setAsunto} />}
          <InputFieldLong 
            value={asunto}
            onChange={setAsunto}
            placeholder="Escribe el asunto..."
          />
          <div className="tooltip-container">
            <button className='container-label-two padding-8 mr-1 mt-2 ml-1' onClick={toggleIsSecondInput}>CUERPO DEL MENSAJE:</button>
            <span className="tooltip-text">Escriba el cuerpo del mensaje...</span>
          </div>
          {isSecondInput && <SecondInput isOpen={isSecondInput} textModal='Escribe el cuerpo del mensaje...' toggleModal={toggleIsSecondInput} onSave={setCuerpoMensaje} />}
          <InputFieldLong 
            value={cuerpoMensaje}
            onChange={setCuerpoMensaje}
            placeholder="Escribe el cuerpo del mensaje..."
          />
        </div>
      </div>
      <div className='btn-container ml-30 mt-2'>
        <button onClick={handleButtonClick}>Generate DOCX</button>
      </div>
    </div>
  );
};

export default LetterInput;
