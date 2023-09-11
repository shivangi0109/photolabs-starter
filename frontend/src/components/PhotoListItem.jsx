import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;

  return (
    <div>
      <img src={props.data.imageSource} alt={`Photo by ${username}`} />
      <div>
        <img src={profile} alt={`Profile picture of ${username}`} />
        <p>{username}</p>
        <p>{location.city} {location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
