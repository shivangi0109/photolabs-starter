import { useState } from 'react';

export default function useApplicationData() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleFavorite = (id) => {
    if (favoritedPhotos.includes(id)) {
      setFavoritedPhotos(favoritedPhotos.filter(favoritedPhotoId => favoritedPhotoId !== id));
      return;
    }
    setFavoritedPhotos([...favoritedPhotos, id]);
  };

  const isSelected = (id) => {
    return favoritedPhotos.includes(id);
  };

  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    selectedPhoto,
    favoritedPhotos,
    setIsModalOpen,
    setSelectedPhoto,
    setFavoritedPhotos,
    toggleFavorite,
    isSelected,
    openModal,
    closeModal
  };
}