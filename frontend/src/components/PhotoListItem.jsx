import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.data.imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Profile picture of ${username}`} />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">{location.city} {location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
