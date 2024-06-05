import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className='flex'>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className= 'box-text mt-2'
        placeholder={placeholder} 
      />
    </div>
  );
};

export default InputField;
