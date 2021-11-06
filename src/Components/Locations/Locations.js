import axios from "axios";
import React, { useEffect, useState } from "react";
import LocationList from "./LocationList";
import styles from "../../Components/styled.module.css";

import { EpisodeStyled } from "./LocationsStyled";
const initialFilter = { name: "", type: "", dimension: "" };
const Locations = () => {
  const [state, setState] = useState({ location: [] });
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location").then(response => setState({ location: response.data.results }));
  }, []);
  const getVisibleLocationName = () => {
    if (state.location.length) {
      return state.location.filter(location => location.name.toLowerCase().includes(filter.name.toLowerCase()));
    }
  };
  const getVisibleLocationType = () => {
    if (state.location.length) {
      return state.location.filter(location => location.type.toLowerCase().includes(filter.type.toLowerCase()));
    }
  };
  const getVisibleLocationDimension = () => {
    if (state.location.length) {
      return state.location.filter(location => location.dimension.toLowerCase().includes(filter.dimension.toLowerCase()));
    }
  };
  const changeInput = e => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className={styles.back__location}>
        <EpisodeStyled>
          <div>
            <ul className="input__list">
              <li className="filtered__li">
                <h2 className="find__name"> Find by name</h2>
              </li>
              <li className="filtered__li">
                <h2 className="find__name">Find by type</h2>
              </li>{" "}
              <li className="filtered__li">
                <h2 className="find__name">Find by dimension</h2>
              </li>
            </ul>
            <div>
              {" "}
              <input type="text" name="name" onChange={changeInput} value={filter.name} />
              <input type="text" name="type" onChange={changeInput} value={filter.type} />
              <input type="text" name="dimension" onChange={changeInput} value={filter.dimension} />
            </div>
            <div>
              <ul>
                {" "}
                {state.location.length ? (
                  <LocationList
                    locationType={getVisibleLocationType()}
                    dimension={getVisibleLocationDimension()}
                    names={getVisibleLocationName()}
                  />
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </EpisodeStyled>
      </div>
    </>
  );
};

export default Locations;
