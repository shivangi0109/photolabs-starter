import React from "react";

import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {

  const photoItems = photos.map((data) => (
    <PhotoListItem key={data.id} data={data} />
  ));

  return (
    <ul className="photo-list">
      <li>
        {photoItems}
      </li>
    </ul>
  );
};

export default PhotoList;
