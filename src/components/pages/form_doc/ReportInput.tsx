import React from 'react';
import InputFieldLong from '../../common/InputFieldLong';
import InputField from '../../common/InputField';

interface ReportInputProps {
  tituloInforme: string;
  setTituloInforme: (value: string) => void;
  autor: string;
  setAutor: (value: string) => void;
  ciudad: string;
  setCiudad: (value: string) => void;
  audiencia: string;
  setAudiencia: (value: string) => void;
  antecedentes: string;
  setAntecedentes: (value: string) => void;
  contenidoPrincipal: string;
  setcontenidoPrincipal: (value: string) => void;
  conclusiones: string;
  setConclusiones: (value: string) => void;
  referencias: string;
  setReferencias: (value: string) => void;
  handleGenerate: () => void;
}

const ReportInput: React.FC<ReportInputProps> = ({
  tituloInforme,
  setTituloInforme,
  autor,
  setAutor,
  ciudad,
  setCiudad,
  audiencia,
  setAudiencia,
  antecedentes,
  setAntecedentes,
  contenidoPrincipal,
  setcontenidoPrincipal,
  conclusiones,
  setConclusiones,
  referencias,
  setReferencias,
  handleGenerate
}) => {
  return (
    <div>
        <div className='flex flex-row'>
      <div>
        <div className='flex'>
          <div className='container-label mr-1 mt-2 ml-2'>TITULO INFORME*:</div>
          <InputField 
            value={tituloInforme}
            onChange={setTituloInforme}
            placeholder="Titulo Informe"
          />
          <div className='container-label mr-1 mt-2 ml-1'>AUDIENCIA:</div>
          <InputField 
            value={audiencia}
            onChange={setAudiencia}
            placeholder="Audiencia"
          />
        </div>
        <div className='flex'>
          <div className='container-label mr-1 mt-2 ml-2'>AUTOR*:</div>
          <InputField 
            value={autor}
            onChange={setAutor}
            placeholder="Autor"
          />
          <div className='container-label mr-1 mt-2 ml-1'>ANTECEDENTES*:</div>
          <InputField 
            value={antecedentes}
            onChange={setAntecedentes}
            placeholder="Antecedentes"
          />
        </div>
        <div className='flex'>
          <div className='container-label mr-1 mt-2 ml-2 inline'>CIUDAD*:</div>
          <InputField 
            value={ciudad}
            onChange={setCiudad}
            placeholder="Ciudad"
          />
          <div className='container-label mr-1 mt-2 ml-1'>CONTENIDO PRINCIPAL:</div>
          <InputField 
            value={contenidoPrincipal}
            onChange={setcontenidoPrincipal}
            placeholder="Contenido Principal"
          />
        </div>
        </div>
        <div>
            <div className='container-label-two padding-14 mr-1 mt-2 ml-1'>DEFINITIVA*:</div>
            <InputFieldLong 
            value={conclusiones}
            onChange={setConclusiones}
            placeholder="Escribe las conclusiones..."
            />
            <div className='container-label-two padding-8 mr-1 mt-2 ml-1'>REFERENCIAS:</div>
            <InputFieldLong 
            value={referencias}
            onChange={setReferencias}
            placeholder="Escribe las referencias..."
            />
        </div>
        </div>
        <div className='btn-container ml-30 mt-2'>
            <button onClick={handleGenerate}>Generate DOCX</button>
        </div>
    </div>
  );
};

export default ReportInput;
