import React, { useState, useEffect } from 'react';
import InputFieldLong from '../../common/InputFieldLong';
import InputField from '../../common/InputField';
import FirstInput from '../../common/popup/FirstInput';
import SecondInput from '../../common/popup/SecondInput';

interface ReportInputProps {
  tituloInforme: string;
  setTituloInforme: (value: string) => void;
  audiencia: string;
  setAudiencia: (value: string) => void;
  autor: string;
  setAutor: (value: string) => void;
  antecedentes: string;
  setAntecedentes: (value: string) => void;
  ciudad: string;
  setCiudad: (value: string) => void;
  referencias: string;
  setReferencias: (value: string) => void;
  contenidoPrincipal: string;
  setcontenidoPrincipal: (value: string) => void;
  conclusiones: string;
  setConclusiones: (value: string) => void;
  handleGenerate: () => void;
}

const ReportInput: React.FC<ReportInputProps> = ({
  tituloInforme,
  setTituloInforme,
  audiencia,
  setAudiencia,
  autor,
  setAutor,
  antecedentes,
  setAntecedentes,
  ciudad,
  setCiudad,
  referencias,
  setReferencias,
  contenidoPrincipal,
  setcontenidoPrincipal,
  conclusiones,
  setConclusiones,
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
            <div className='container-label mr-1 mt-2 ml-2'>TITULO INFORME*:</div>
            <InputField 
              value={tituloInforme}
              onChange={setTituloInforme}
              placeholder="Titulo Informe"
            />
            <div className='container-label mr-1 mt-2 ml-1'>AUDIENCIA*:</div>
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
            <div className='container-label mr-1 mt-2 ml-1'>REFERENCIAS:</div>
            <InputField 
              value={referencias}
              onChange={setReferencias}
              placeholder="Referencias"
            />
          </div>
        </div>
        <div>
          <div className="tooltip-container">
            <button className='container-label-two padding-8 mr-1 mt-2 ml-1' onClick={toggleIsFirstInput}>CONT. PRINCIPAL:</button>
            <span className="tooltip-text">Escriba el contenido principal....</span>
          </div>
          {isFirstInput && <FirstInput isOpen={isFirstInput} textModal='Escribe el contenido principal...' toggleModal={toggleIsFirstInput} onSave={setcontenidoPrincipal} />}
          <InputFieldLong 
            value={contenidoPrincipal}
            onChange={setcontenidoPrincipal}
            placeholder="Escribe el contenido principal..."
          />
          <div className="tooltip-container">
            <button className='container-label-two padding-14 mr-1 mt-2 ml-1' onClick={toggleIsSecondInput}>CONCLUSIÓN:</button>
            <span className="tooltip-text">Escriba la conclusion....</span>
          </div>
          {isSecondInput && <SecondInput isOpen={isSecondInput} textModal='Escribe la conclusión...' toggleModal={toggleIsSecondInput} onSave={setConclusiones} />}
          <InputFieldLong 
            value={conclusiones}
            onChange={setConclusiones}
            placeholder="Escribe la conlusión..."
          />
        </div>
      </div>
      <div className='btn-container ml-30 mt-2'>
        <button onClick={handleButtonClick}>Generate DOCX</button>
      </div>
    </div>
  );
};

export default ReportInput;
