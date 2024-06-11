import React from 'react';
import '../../styles/layout/index.css';

interface ComboBoxProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  tooltip?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, value, onChange, name, tooltip }) => {
  return (
    <select 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
      className="combo-box"
      title={tooltip}
    >
      <option value="" disabled hidden>{name}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ComboBox;
