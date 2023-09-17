import React, { useState } from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

// Import mock data
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {

  // State to manage modal visibility and selected photo data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  console.log(selectedPhoto);

  // Function to open the modal with selected photo data
  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} />
      {isModalOpen && (
        <PhotoDetailsModal onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
