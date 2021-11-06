import axios from "axios";
import React, { useEffect, useState } from "react";
import EpisodeList from "./EpisodeList";
import styles from "../../Components/styled.module.css";

import { EpisodesStyled } from "./EpisodesStyled";
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
      <div className={styles.back__episodes}>
        <EpisodesStyled>
          <div>
            <h2 className="form__name">Find Episode</h2>
            <div>
              <input className="form__input" type="text" name="filter" value={stateFilter.filter} onChange={handleChange} />
              <ul>{state.episode.length ? <EpisodeList episode={getVisibleEpisode()} /> : <p>There are no episode here</p>}</ul>
            </div>
          </div>
        </EpisodesStyled>
      </div>
    </>
  );
};

export default Episodes;
