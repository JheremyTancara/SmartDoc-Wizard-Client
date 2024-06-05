import React from 'react';
import img from '../../../../assets/img_link'

const TitleHeader: React.FC = () => {
  return (
    <div>
      <header>
        <div className="flex header-color justify-center py-6">
          <img src={img.logo_smartdoc} width="80" height="80" className="inline mr-2 mt-1"/>
          <h1 className="text-2xl font-bold white-color text-center inline mt-2">Automatización y Redaccion de Documentos</h1>
        </div>
        <div className="flex header-color">
          <h1 className="size-text-8xl font-bold white-color ml-4 mt-negative">SmartDoc Wizard</h1>
        </div>
      </header> 
      <div className="bg-white py-1"></div>
    </div>
  );
}

export default TitleHeader;
