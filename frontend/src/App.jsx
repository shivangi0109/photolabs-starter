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
    selectedTopicPhotos, // Access to the fetched selected topic photos
    searchResults,
    toggleFavorite,
    isSelected,
    openModal,
    closeModal,
    getPhotosByTopics,
    searchPhotos
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} openModal={openModal} favoritedPhotos={favoritedPhotos} toggleFavorite={toggleFavorite} isSelected={isSelected} getPhotosByTopics={getPhotosByTopics} selectedTopicPhotos={selectedTopicPhotos} searchPhotos={searchPhotos} searchResults={searchResults} />
      {isModalOpen && (
        <PhotoDetailsModal selectedPhoto={selectedPhoto} toggleFavorite={toggleFavorite} isSelected={isSelected} onClose={closeModal} selectedTopicPhotos={selectedTopicPhotos} />
      )}
    </div>
  );
};

export default App;
