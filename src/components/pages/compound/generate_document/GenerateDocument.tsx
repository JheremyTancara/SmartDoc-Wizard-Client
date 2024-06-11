import React, { useState } from 'react';
import generateDocx from '../../../services/GenerateDocx';
import Header from '../../base/header/Header';
import ComboBox from '../../../common/ComboBox';
import LetterInput from '../../form_doc/LetterInput';
import ReportInput from '../../form_doc/ReportInput';
import MemorandumInput from '../../form_doc/MemorandumInput';
import CircularInput from '../../form_doc/CircularInput';
import InstructionInput from '../../form_doc/Instructions';
import ServiceSheetInput from '../../form_doc/ServiceSheetInput';
import '../../../../styles/colors/index.css';
import '../../../../styles/paddings/index.css';

const DocxGenerator: React.FC = () => {
  const [typeDocument, setTypeDocument] = useState(''); 
  const [model, setModel] = useState('');

  const [document, setDocument] = useState('');
  const [modelSend, setModelSend] = useState('');
  const [date, setDate] = useState(formatDate(new Date())); 
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

  const username = localStorage.getItem('userLogged') || 'none';
  const time = new Date().toLocaleTimeString();

  const handleGenerate = async () => {
    if (!modelSend) {
      alert('Por favor, escoja una plantilla.');
      return;
    }
    await generateDocx({
      document,
      username,
      date,
      time,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10,
      modelSend
    });
  };

  const handleDocumentChange = (value: string) => {
    setTypeDocument(value);
    setDocument(value);
    console.log('Selected option:', value);
  };

  const handleModelChange = (value: string) => {
    setModel(value);
    setModelSend(value);
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
                  tooltip="Escoge un tipo de documento" 
                />
              </div>
              <div className='inline'>
                <ComboBox 
                  name="PLANTILLAS"
                  options={['Plantilla 1', 'Plantilla 2', 'Plantilla 3', 'Plantilla 4', 'Plantilla 5', 'Plantilla 6']} 
                  value={model} 
                  onChange={handleModelChange} 
                  tooltip="Escoge un tipo de plantilla" 
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
                referencias={value6} setReferencias={setValue6}
                contenidoPrincipal={value9} setcontenidoPrincipal={setValue9}
                conclusiones={value10} setConclusiones={setValue10}
                handleGenerate={handleGenerate}
              />
            )}
            {typeDocument === 'Memorandums' && (
              <MemorandumInput 
                cite={value1} setCite={setValue1}
                remitente={value2} setRemitente={setValue2}
                ciudad={value3} setCiudad={setValue3}
                destinatario={value4} setDestinatario={setValue4}
                prof_remitente={value5} setProfRemitente={setValue5}
                gen_destinatario={value6} setGenDestinatario={setValue6}
                prof_destinatario={value7} setProfDestinatario={setValue7}
                asunto={value9} setAsunto={setValue9}
                contenido={value10} setContenido={setValue10}
                handleGenerate={handleGenerate}
              />
            )}
            {typeDocument === 'Circular' && (
              <CircularInput 
                cite={value1} setCite={setValue1}
                remitente={value2} setRemitente={setValue2}
                telf_remitente={value3} setTelfRemitente={setValue3}
                prof_remitente={value4} setProfRemitente={setValue4}
                ciudad={value5} setCiudad={setValue5}
                direccion={value6} setDireccion={setValue6}
                asunto={value7} setAsunto={setValue7}
                contenido={value8} setContenido={setValue8}
                destinatarios={value9} setDestinatarios={setValue9}
                prof_destinatarios={value10} setProfDestinatarios={setValue10}
                handleGenerate={handleGenerate}
              />
            )}
            {typeDocument === 'Instructivos' && (
              <InstructionInput 
                cite={value1} setCite={setValue1}
                direccion={value2} setDireccion={setValue2}
                remitente={value3} setRemitente={setValue3}
                prof_remitente={value4} setProfRemitente={setValue4}
                telf_remitente={value5} setTelfRemitente={setValue5}
                destinatario={value6} setDestinatario={setValue6}
                ciudad={value7} setCiudad={setValue7}
                asunto={value8} setAsunto={setValue8}
                contenido={value9} setContenido={setValue9}
                handleGenerate={handleGenerate}
              />
            )}
            {typeDocument === 'Hoja de servicio' && (
              <ServiceSheetInput 
                establecimiento={value1} setEstablecimiento={setValue1}
                direccion={value2} setDireccion={setValue2}
                ciudad={value3} setCiudad={setValue3}
                cite={value4} setCite={setValue4}
                remitente={value5} setRemitente={setValue5}
                prof_remitente={value6} setProfRemitente={setValue6}
                cant_alumnos={value7} setCantAlumnos={setValue7}
                nombres={value8} setNombres={setValue8}
                cursos={value9} setCursos={setValue9}
                contenido={value10} setContenido={setValue10}
                handleGenerate={handleGenerate}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('es-ES', options);
};

export default DocxGenerator;
