import React, { useState } from 'react';
// import VideoModal from './VideoModal';

export function useModal() {
  const [modals, setModals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id, content) => {
    setModals((prevModals) => [...prevModals, { id, ...content }]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModals([]);
  };

  return {
    modals,
    openModal,
    closeModal,
    isModalOpen,
  };
}
