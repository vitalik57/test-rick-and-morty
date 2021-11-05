import React from "react";
const EpisodeList = ({ episode }) => {
  return (
    <>
      {episode.map(episod => (
        <li>{episod.name}</li>
      ))}
    </>
  );
};

export default EpisodeList;
