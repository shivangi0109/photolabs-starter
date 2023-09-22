import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const topicItems = Array.isArray(props.topics) ? props.topics.map((topic) => (
    <TopicListItem key={topic.id} topic={topic} onClick={() => {
      props.setSearchFormInput('');
      props.getPhotosByTopics(topic.id);
    }} />
  )) : [];

  return (
    <div className="top-nav-bar__topic-list">
      {topicItems}
    </div>
  );
};

export default TopicList;
