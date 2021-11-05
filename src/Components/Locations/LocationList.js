import React from "react";
const LocationList = ({ names, locationType, dimension }) => {
  return (
    <>
      <div>
        {names.map(name => (
          <li key={name.id}>
            <h2>{name.name}</h2>
            <p>{name.type}</p>
            <p>{name.dimension}</p>
          </li>
        ))}
      </div>

      <div>
        {locationType.map(name => (
          <li key={name.id}>
            <h2>{name.name}</h2>
            <p>{name.type}</p>
            <p>{name.dimension}</p>
          </li>
        ))}
      </div>

      <div>
        {dimension.map(name => (
          <li key={name.id}>
            <h2>{name.name}</h2>
            <p>{name.type}</p>
            <p>{name.dimension}</p>
          </li>
        ))}
      </div>
    </>
  );
};

export default LocationList;
