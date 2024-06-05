import React, { useRef, useEffect } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const maxLines = 5;

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const lineCount = (newValue.match(/\n/g) || []).length + 1;

    if (lineCount <= maxLines) {
      onChange(newValue);
    } 
  };

  return (
    <div className='flex'>
      <textarea 
        ref={textareaRef}
        value={value} 
        onChange={handleChange} 
        className='box-text-long ml-12 mt-negative-input'
        placeholder={placeholder} 
        rows={1}
        style={{ overflow: 'hidden' }}
      />
    </div>
  );
};

export default InputField;
