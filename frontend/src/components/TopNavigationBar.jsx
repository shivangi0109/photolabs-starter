import React from 'react';

import TopicList from './TopicList';
import PhotoFavButton from "./PhotoFavButton";
import '../styles/TopNavigationBar.scss';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__logo">PhotoLabs</div>
      <div>
        <TopicList />
      </div>
      <div>
        <PhotoFavButton />
      </div>
    </div>
  );
};

export default TopNavigation;