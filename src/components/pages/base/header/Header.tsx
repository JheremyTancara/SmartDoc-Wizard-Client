import React from 'react';

import Buttons from '../../compound/header/Buttons';
import TitleHeader from '../../compound/header/TitleHeader';

const Header: React.FC = () => {
  return (
    <div className="body-color flex flex-col">
      <TitleHeader />
      <Buttons />
    </div>
  );
}

export default Header;
