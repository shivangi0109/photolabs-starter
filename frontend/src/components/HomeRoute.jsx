import React, { useState } from 'react';

import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favoritedPhotos={props.favoritedPhotos} isSelected={props.isSelected} />
      <PhotoList photos={props.photos} toggleFavorite={props.toggleFavorite} isSelected={props.isSelected} openModal={props.openModal} />
    </div>
  );
};

export default HomeRoute;
