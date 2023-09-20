import React from 'react';

import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const { location, urls, user, similarPhotos } = props.selectedPhoto;
  
  const renderSimilarPhotos = similarPhotos ? (
    <div>
      <h2>Similar Photos</h2>
      <div className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotos}
          isSelected={props.isSelected}
          toggleFavorite={props.toggleFavorite}
          selectedTopicPhotos={props.selectedTopicPhotos}
        />
      </div>
    </div>
  ) : null;

  return (
    <div className="photo-details-modal">
      <button onClick={props.onClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Display larger version of selected photo */}
      <div>
        <PhotoFavButton onClick={() => props.toggleFavorite(props.selectedPhoto.id)} selected={props.isSelected(props.selectedPhoto.id)} />
        <img className="photo-details-modal__image" src={urls.full} alt={`Photo by ${user.name}`} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__user-profile" src={user.profile} alt={`Profile picture of ${user.name}`} />
          <div className="photo-details-modal__user-info">
            {user.name}
            <div className="photo-details-modal__user-location">{location.city}, {location.country}</div>
          </div>
        </div>
      </div>

      {/* Display similar photos */}
      <h2>Similar Photos</h2>
      <div className="photo-details-modal__images">
        {renderSimilarPhotos}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
