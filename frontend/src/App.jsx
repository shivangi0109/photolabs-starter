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
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Function to open the modal with selected photo data
  const openModal = (photoData) => {
    // setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} />
      {isModalOpen && (
        <PhotoDetailsModal />
      )}
    </div>
  );
};

export default App;
