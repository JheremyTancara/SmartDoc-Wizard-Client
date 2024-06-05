import React from 'react';
import InputFieldLong from '../../common/InputFieldLong';
import InputField from '../../common/InputField';

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
          <div className='container-label mr-1 mt-2 ml-2 inline'>GEN. DEL DESTINATARIO*:</div>
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
            <div className='container-label-two padding-14 mr-1 mt-2 ml-1'>ASUNTO:</div>
            <InputFieldLong 
            value={asunto}
            onChange={setAsunto}
            placeholder="Escribe el asunto..."
            />
            <div className='container-label-two padding-8 mr-1 mt-2 ml-1'>CUERPO DEL MENSAJE:</div>
            <InputFieldLong 
            value={cuerpoMensaje}
            onChange={setCuerpoMensaje}
            placeholder="Escribe el cuerpo del mensaje..."
            />
        </div>
        </div>
        <div className='btn-container ml-30 mt-2'>
            <button onClick={handleGenerate}>Generate DOCX</button>
        </div>
    </div>
  );
};

export default LetterInput;
