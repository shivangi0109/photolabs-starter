import React, { useState } from 'react';

import TopicList from './TopicList';
import PhotoFavButton from "./PhotoFavButton";
import Search from './Search';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  const [searchFormInput, setSearchFormInput] = useState('');

  // Calculate the count of favorited photos
  const favoritedCount = props.favoritedPhotos.length;

  // Determine whether to show notifications
  const showNotifications = favoritedCount > 0;

  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__logo">PhotoLabs</div>
      <div className="topic-search">
        <TopicList topics={props.topics} getPhotosByTopics={props.getPhotosByTopics} setSearchFormInput={setSearchFormInput} />
        <Search onSearch={props.searchPhotos} searchFormInput={searchFormInput} setSearchFormInput={setSearchFormInput} />
      </div>
      <div>
        <PhotoFavButton displayAlert={showNotifications} selected={props.isSelected} />
      </div>
      {/* {favoritedCount > 0 && (
        <div>
          {favoritedCount}
        </div>
      )} */}
    </div>
  );
};

export default TopNavigation;