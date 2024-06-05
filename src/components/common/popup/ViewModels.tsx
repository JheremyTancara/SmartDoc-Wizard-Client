import React from 'react';
import Modal from '../Modal';
import img from '../../../assets/img_link';
import '../../../styles/paddings/index.css';

interface ViewModelsProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const ViewModels: React.FC<ViewModelsProps> = ({ isOpen, toggleModal }) => {
  const closeModal = () => {
    toggleModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="image-container">
        <img src={img.first_model} width="200" height="170" className="mr-2 ml-1-5" />
        <p className="image-text">Primer Modelo</p>
      </div>
      <div className="image-container">
        <img src={img.first_model} width="200" height="170" className="mr-2" />
        <p className="image-text">Segundo Modelo</p>
      </div>
      <div className="image-container">
        <img src={img.first_model} width="200" height="170" className="mr-2" />
        <p className="image-text">Tercer Modelo</p>
      </div>
      <div className="image-container">
        <img src={img.first_model} width="200" height="170" className="mr-2" />
        <p className="image-text">Cuarto Modelo</p>
      </div>
      <div className="image-container">
        <img src={img.first_model} width="200" height="170" className="mr-2" />
        <p className="image-text">Quinto Modelo</p>
      </div>
      <div className="image-container">
        <img src={img.first_model} width="200" height="170" className="mr-2" />
        <p className="image-text">Sexto Modelo</p>
      </div>
    </Modal>
  );
};

export default ViewModels;
