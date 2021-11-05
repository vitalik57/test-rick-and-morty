import axios from "axios";
import React, { useEffect, useState } from "react";
import EpisodeList from "./EpisodeList";
const Episodes = () => {
  const [state, setstate] = useState({ episode: [] });
  const [stateFilter, setFilter] = useState({ filter: "" });
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode").then(response => setstate({ episode: response.data.results }));
  }, []);
  const handleChange = e => {
    const { name, value } = e.target;
    setFilter({
      [name]: value
    });
  };
  const getVisibleEpisode = () => {
    if (state.episode.length) {
      return state.episode.filter(episod => episod.name.toLowerCase().includes(stateFilter.filter.toLowerCase()));
    }
  };
  return (
    <>
      <div>
        <h2>Find Episode</h2>
        <input type="text" name="filter" value={stateFilter.filter} onChange={handleChange} />
        <div>
          <ul>{state.episode.length ? <EpisodeList episode={getVisibleEpisode()} /> : <p>There are no episode here</p>}</ul>
        </div>
      </div>
    </>
  );
};

export default Episodes;
