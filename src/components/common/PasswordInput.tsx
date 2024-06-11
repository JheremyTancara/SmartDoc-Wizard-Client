import React, { useState } from 'react';
import eyeIcon from '../../assets/icons/eyeIcon.png'; 
import hiddenEyeIcon from '../../assets/icons/hiddenEyeIcon.png';
import '../../styles/layout/index.css';


interface PasswordInputProps {
  value: string;
  className: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, className, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <input 
        type={showPassword ? "text" : "password"} 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className={`box-text-signup ${className}`}
        placeholder={placeholder} 
      />
      <button onClick={togglePasswordVisibility} className="eye-button ml-1">
        <img src={showPassword ? eyeIcon : hiddenEyeIcon} alt={showPassword ? "Ocultar" : "Mostrar"} style={{ width: "20px", height: "20px" }} />
      </button>
    </div>
  );
};

export default PasswordInput;