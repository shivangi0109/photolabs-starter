import React, { useCallback } from 'react';
import { useToggle } from '../hooks/useToggle';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  
  const [faved, toggleFav] = useToggle();

  return (
    <div className="photo-list__fav-icon">
      <div onClick={toggleFav} className="photo-list__fav-icon-svg">
        <FavIcon selected={faved} />
      </div>
    </div>
  );
};

export default PhotoFavButton;