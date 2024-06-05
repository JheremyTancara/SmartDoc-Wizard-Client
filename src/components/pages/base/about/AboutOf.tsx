import React from 'react';

import Header from '../header/Header';
import img from '../../../../assets/img_link'
import '../../../../styles/about/index.css';


const AboutOf: React.FC = () => {

  const listItemClassName = 'text-4x1 font-bold gray-color'
  const titleClassName = 'text-3x1 font-bold dark-gray-color'
  const size_img = 300

  return (
    <div className='body-color min-h-screen'>
      <Header />
      <div className="content-container">
        <h1 className='text-2x1 font-bold dark-gray-color'>ORGANIZACIÓN INFANTILES ALDEAS SOS</h1>
        <div className="flex justify-center mt-1 mb-1">
          <img src={img.first_img_company} width={size_img} height={size_img} className="inline" />
          <img src={img.second_img_company} width={size_img} height={size_img} className="ml-2 inline" />
        </div>  
        <p className={listItemClassName}>
          Es una organización sin fines de lucro, no gubernamental e independiente que trabaja por el derecho de los niños y niñas a vivir en familia. En el mundo, somos la organización más grande de atención directa a la infancia. Nuestro compromiso es garantizar que los niños y niñas de todo el mundo gocen del cuidado de calidad al que tienen derecho.
        </p>

        <h2 className={titleClassName}>Valores</h2>
        <ul>
          <li className={listItemClassName}>
            <strong>Compromiso: </strong> 
            Comprometerse es, sobre todo, implicarse en la realidad para transformarla.
            </li>
          <li className={listItemClassName}>
            <strong>Confianza:</strong> 
            La confianza genera adhesión a un proyecto y a las personas que lo hacen realidad.
            </li>
          <li className={listItemClassName}>
            <strong>Audacia:</strong> 
            Emprendemos acciones que provoquen un cambio radical en la vida de los niños.
            </li>
          <li className={listItemClassName}>
            <strong>Responsabilidad:</strong> 
            La responsabilidad expresa un deber y una especial sensibilidad para responder a las necesidades ajenas.
            </li>
        </ul>

        <p className={titleClassName}>
          Todos los esfuerzos de Aldeas Infantiles SOS responden al interés superior del niño y la niña. La organización busca:
        </p>
        <ul>
          <li className={listItemClassName}>Fortalecer familias en riesgo de separarse para que los niños y niñas no pierdan el cuidado de sus padres.</li>
          <li className={listItemClassName}>Brindar alternativas de cuidado a los niños, niñas y jóvenes que perdieron el cuidado de sus familias.</li>
          <li className={listItemClassName}>Promover los derechos de la niñez en el país para que se fortalezcan y mejoren los sistemas de protección a la infancia.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutOf;
