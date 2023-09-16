import React, { useState } from 'react';

import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

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

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favoritedPhotos={favoritedPhotos} isSelected={isSelected} />
      <PhotoList photos={props.photos} toggleFavorite={toggleFavorite} isSelected={isSelected} />
    </div>
  );
};

export default HomeRoute;
