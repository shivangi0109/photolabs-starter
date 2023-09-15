import React, { useCallback } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  
  return (
    <div className="photo-list__fav-icon">
      <div onClick={props.onClick} className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={props.selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;