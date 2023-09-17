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

  // State to manage favorited photos across the application
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleFavorite = (id) => {
    if (favoritedPhotos.includes(id)) {
      // console.log('Removing photo', id);
      // const newFavourites = favoritedPhotos.filter(favoritedPhotoId => favoritedPhotoId !== id);
      // console.log(newFavourites);
      setFavoritedPhotos(favoritedPhotos.filter(favoritedPhotoId => favoritedPhotoId !== id));
      return;
    }
    // console.log('Adding photo', id);
    setFavoritedPhotos([...favoritedPhotos, id]);
  };

  const isSelected = (id) => {
    return favoritedPhotos.includes(id);
  };

  // Function to open the modal with selected photo data
  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  // Function to close the modal with selected photo data
  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

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
