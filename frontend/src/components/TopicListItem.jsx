import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, slug, title } = props.topic;

  return (
    <div onClick={props.onClick} className="topic-list__item">
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
