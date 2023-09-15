import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {

  const topicItems = topics.map((data) => (
    <TopicListItem key={data.id} data={data} />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {topicItems}
    </div>
  );
};

export default TopicList;
