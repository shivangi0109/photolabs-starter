import React from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

// Import mock data
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = (props) => {

  const {
    isModalOpen,
    selectedPhoto,
    favoritedPhotos,
    toggleFavorite,
    isSelected,
    openModal,
    closeModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={openModal} favoritedPhotos={favoritedPhotos} toggleFavorite={toggleFavorite} isSelected={isSelected} />
      {isModalOpen && (
        <PhotoDetailsModal selectedPhoto={selectedPhoto} toggleFavorite={toggleFavorite} isSelected={isSelected} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
