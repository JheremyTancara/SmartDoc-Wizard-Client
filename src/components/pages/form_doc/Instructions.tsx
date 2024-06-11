import React, { useState, useEffect } from 'react';
import InputFieldLong from '../../common/InputFieldLong';
import InputField from '../../common/InputField';
import FirstInput from '../../common/popup/FirstInput';
import SecondInput from '../../common/popup/SecondInput';
import '../../../styles/popup/index.css';

interface InstructionInputProps {
  cite: string;
  setCite: (value: string) => void;
  direccion: string;
  setDireccion: (value: string) => void;
  remitente: string;
  setRemitente: (value: string) => void;
  prof_remitente: string;
  setProfRemitente: (value: string) => void;
  telf_remitente: string;
  setTelfRemitente: (value: string) => void;
  destinatario: string;
  setDestinatario: (value: string) => void;
  ciudad: string;
  setCiudad: (value: string) => void;
  asunto: string;
  setAsunto: (value: string) => void;
  contenido: string;
  setContenido: (value: string) => void;
  handleGenerate: () => void;
}

const InstructionInput: React.FC<InstructionInputProps> = ({
  cite,
  setCite,
  direccion,
  setDireccion,
  remitente,
  setRemitente,
  prof_remitente,
  setProfRemitente,
  telf_remitente,
  setTelfRemitente,
  destinatario,
  setDestinatario,
  ciudad,
  setCiudad,
  asunto,
  setAsunto,
  contenido,
  setContenido,
  handleGenerate
}) => {
  const [isFirstInput, setIsFirstInput] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedStatus = localStorage.getItem('isLogged') === 'true';
    setIsLogged(loggedStatus);
  }, []);

  const toggleIsFirstInput = () => {
    setIsFirstInput(!isFirstInput);
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
            <div className='container-label mr-1 mt-2 ml-1'>DIRECCION*:</div>
            <InputField 
              value={direccion}
              onChange={setDireccion}
              placeholder="Direccion"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2'>REMITENTE*:</div>
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
            <div className='container-label mr-1 mt-2 ml-2 inline'>TELF. DEL REMITENTE*:</div>
            <InputField 
              value={telf_remitente}
              onChange={setTelfRemitente}
              placeholder="Telf. Remitente"
            />
            <div className='container-label mr-1 mt-2 ml-1'>DESTINATARIO*:</div>
            <InputField 
              value={destinatario}
              onChange={setDestinatario}
              placeholder="Destinatario"
            />
          </div>
          <div className='flex'>
            <div className='container-label mr-1 mt-2 ml-2 inline'>CIUDAD*:</div>
            <InputField 
              value={ciudad}
              onChange={setCiudad}
              placeholder="Ciudad"
            />
            <div className='container-label mr-1 mt-2 ml-1'>ASUNTO*:</div>
            <InputField 
              value={asunto}
              onChange={setAsunto}
              placeholder="Asunto"
            />
          </div>
        </div>
        <div>
          <div className="tooltip-container">
            <button className='container-label-two padding-14 mr-1 mt-2 ml-1' onClick={toggleIsFirstInput}>COTENIDO:</button>
            <span className="tooltip-text">Escriba el contenido del instructivo...</span>
          </div>
          {isFirstInput && <FirstInput isOpen={isFirstInput} textModal='Escriba el contenido del instructivo...' toggleModal={toggleIsFirstInput} onSave={setContenido} />}
          <InputFieldLong 
            value={contenido}
            onChange={setContenido}
            placeholder='Escriba el contenido del instructivo...'
          />
        </div>
      </div>
      <div className='btn-container ml-30 mt-2'>
        <button onClick={handleButtonClick}>Generate DOCX</button>
      </div>
    </div>
  );
};

export default InstructionInput;
