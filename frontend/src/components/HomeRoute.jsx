import React, { useState } from 'react';

import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favoritedPhotos={props.favoritedPhotos} isSelected={props.isSelected} getPhotosByTopics={props.getPhotosByTopics} searchPhotos={props.searchPhotos} />
      <PhotoList photos={props.photos} toggleFavorite={props.toggleFavorite} isSelected={props.isSelected} openModal={props.openModal} selectedTopicPhotos={props.selectedTopicPhotos} searchResults={props.searchResults} />
    </div>
  );
};





export default HomeRoute;
