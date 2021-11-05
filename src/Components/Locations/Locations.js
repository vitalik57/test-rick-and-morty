import axios from "axios";
import React, { useEffect, useState } from "react";
import LocationList from "./LocationList";
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
      <div>
        <ul>
          <li>
            <h2>Find by name</h2>
            <input type="text" name="name" onChange={changeInput} value={filter.name} />
          </li>
          <li>
            <h2>Find by type</h2>
            <input type="text" name="type" onChange={changeInput} value={filter.type} />
          </li>{" "}
          <li>
            <h2>Find by dimension</h2>
            <input type="text" name="dimension" onChange={changeInput} value={filter.dimension} />
          </li>
        </ul>
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
    </>
  );
};

export default Locations;
