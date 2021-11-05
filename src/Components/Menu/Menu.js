import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/list">My watch list</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Menu;
