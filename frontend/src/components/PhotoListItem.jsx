import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { location, urls, user } = props.photo;

  return (
    <div onClick={props.onClick} className="photo-list__item">
      <PhotoFavButton onClick={props.toggleFavorite} selected={props.selected} />
      <img className="photo-list__image" src={urls.full} alt={`Photo by ${user.name}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile picture of ${user.name}`} />
        <div className="photo-list__user-info">
          {user.name}
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
