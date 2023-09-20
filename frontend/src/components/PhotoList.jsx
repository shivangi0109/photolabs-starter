import React from "react";

import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  let photoItems;

  if (Array.isArray(props.selectedTopicPhotos) && props.selectedTopicPhotos.length === 0) {
    photoItems = Array.isArray(props.photos) ? props.photos.map((photo) => {
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
  } else if (Array.isArray(props.selectedTopicPhotos) && props.selectedTopicPhotos.length > 0) {
    photoItems = Array.isArray(props.selectedTopicPhotos) ? props.selectedTopicPhotos.map((photo) => {
      const selected = props.isSelected(photo.id);
  
      return (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavorite={() => props.toggleFavorite(photo.id)}
          selected={selected}
          onClick={() => props.openModal(photo)}
          selectedTopicPhotos={props.selectedTopicPhotos}
        />
      );
    }) : [];
  }

  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
