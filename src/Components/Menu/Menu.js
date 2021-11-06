import React from "react";
import { NavLink } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";

const Menu = () => {
  return (
    <>
    <MenuStyled><h1>Menu<h1>
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
      <MenuStyled/>
    
    </>
  );
};

export default Menu;
