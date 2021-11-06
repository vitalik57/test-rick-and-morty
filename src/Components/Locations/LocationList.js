import React from "react";
const LocationList = ({ names, locationType, dimension }) => {
  return (
    <>
      <div>
        {names.map(name => (
          <li className="location__planet" key={name.id}>
            <h2>Name:{name.name}</h2>
            <p> Type:{name.type}</p>
            <p>Dimension:{name.dimension}</p>
          </li>
        ))}
      </div>

      <div>
        {locationType.map(name => (
          <li className="location__planet" key={name.id}>
            <h2>Name:{name.name}</h2>
            <p> Type:{name.type}</p>
            <p>Dimension:{name.dimension}</p>
          </li>
        ))}
      </div>

      <div>
        {dimension.map(name => (
          <li className="location__planet" key={name.id}>
            <h2>Name:{name.name}</h2>
            <p> Type:{name.type}</p>
            <p>Dimension:{name.dimension}</p>
          </li>
        ))}
      </div>
    </>
  );
};

export default LocationList;
