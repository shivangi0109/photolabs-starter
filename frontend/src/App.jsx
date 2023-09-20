import React from 'react';

import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = (props) => {

  const {
    isModalOpen,
    selectedPhoto,
    favoritedPhotos,
    photoData, // Access to the fetched photo data
    topicData, // Access to the fetched topic data
    toggleFavorite,
    isSelected,
    openModal,
    closeModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} openModal={openModal} favoritedPhotos={favoritedPhotos} toggleFavorite={toggleFavorite} isSelected={isSelected} />
      {isModalOpen && (
        <PhotoDetailsModal selectedPhoto={selectedPhoto} toggleFavorite={toggleFavorite} isSelected={isSelected} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
