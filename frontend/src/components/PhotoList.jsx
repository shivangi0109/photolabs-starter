import React from "react";

import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const photoItems = props.photos.map((photo) => {
    const selected = props.isSelected(photo.id);

    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        toggleFavorite={() => props.toggleFavorite(photo.id)}
        selected={selected}
      />
    );
  });

  return (
    <ul className="photo-list">
      <li>
        {photoItems}
      </li>
    </ul>
  );
};

export default PhotoList;
