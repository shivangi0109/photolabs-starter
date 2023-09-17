import React from "react";

import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const photoItems = Array.isArray(props.photos) ? props.photos.map((photo) => {
    const selected = props.isSelected(photo.id);

    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        toggleFavorite={() => props.toggleFavorite(photo.id)}
        selected={selected}
        onClick={() => props.openModal(photo)}
      />
    );
  }) : [];

  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
