import React, { useState } from 'react';
import generateDocx from '../../../services/GenerateDocx';
import Header from '../../base/header/Header';
import ComboBox from '../../../common/ComboBox';
import LetterInput from '../../form_doc/LetterInput';
import ReportInput from '../../form_doc/ReportInput';
import '../../../../styles/colors/index.css';
import '../../../../styles/paddings/index.css';


const DocxGenerator: React.FC = () => {
  const [typeDocument, setTypeDocument] = useState(''); 
  const [model, setModel] = useState('');

  const [document, setDocument] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState(''); 
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState(''); 
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState('');

  const handleGenerate = async () => {
    await generateDocx({
      document,
      value1,
      value2,
      value3,
      value4
    });
  };

  const handleDocumentChange = (value: string) => {
    setTypeDocument(value);
    setDocument(value);
    console.log('Selected option:', value);
  };

  const handleModelChange = (value: string) => {
    setModel(value);
    console.log('Selected option:', value);
  };

  return (
    <div className='body-color min-color'>
      <Header />
      <div className="container">
        <div className="rectangle">
          <div className='flex flex-col black-rectangle mt-3'>
            <div className='mt-3 ml-19'>
              <h1 className="text-1xl font-bold white-color inline">Automatización y Redacción de Documentos</h1>
            </div>
            <div className='ml-26 mt-1 md-1'>
              <div className='inline mr-6'>
                <ComboBox 
                  name="TIPO DE DOCUMENTO"
                  options={['Cartas', 'Informes', 'Memorandums', 'Circular', 'Instructivos', 'Hoja de servicio']} 
                  value={typeDocument} 
                  onChange={handleDocumentChange} 
                />
              </div>
              <div className='inline'>
                <ComboBox 
                  name="PLANTILLAS"
                  options={['Plantilla 1', 'Plantilla 2', 'Plantilla 3', 'Plantilla 4', 'Plantilla 5', 'Plantilla 6']} 
                  value={model} 
                  onChange={handleModelChange} 
                />
              </div>
            </div>

            {typeDocument === 'Cartas' && (
              <LetterInput 
                ciudad={value1} setCiudad={setValue1}
                empresa={value2} setEmpresa={setValue2}
                destinatario={value3} setDestinatario={setValue3}
                remitente={value4} setRemitente={setValue4}
                gen_destinatario={value5} setGenDestinatario={setValue5}
                prof_remitente={value6} setProfRemitente={setValue6}
                prof_destinatario={value7} setProfDestinatario={setValue7}
                telf_remitente={value8} setTelfRemitente={setValue8}
                asunto={value9} setAsunto={setValue9}
                cuerpoMensaje={value10} setCuerpoMensaje={setValue10}
                handleGenerate={handleGenerate}
              />
            )}
            {typeDocument === 'Informes' && (
              <ReportInput 
              tituloInforme={value1} setTituloInforme={setValue1}
              audiencia={value2} setAudiencia={setValue2}
              autor={value3} setAutor={setValue3}
              antecedentes={value4} setAntecedentes={setValue4}
              ciudad={value5} setCiudad={setValue5}
              contenidoPrincipal={value6} setcontenidoPrincipal={setValue6}
              conclusiones={value9} setConclusiones={setValue9}
              referencias={value10} setReferencias={setValue10}
              handleGenerate={handleGenerate}
            />
            )}
            {typeDocument === 'Memorandums' && (
              <h1></h1>
            )}
            {typeDocument === 'Circular' && (
              <h1></h1>
            )}
            {typeDocument === 'Instructivos' && (
              <h1></h1>
            )}
            {typeDocument === 'Hoja d e servicio' && (
              <h1></h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocxGenerator;
