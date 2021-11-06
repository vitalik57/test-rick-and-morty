import React from "react";
import { NavLink } from "react-router-dom";
import { MenuStyled } from "./MenuStyled";

const Menu = () => {
  return (
    <>
      <MenuStyled>
        {" "}
        <div>
          <h1>Menu</h1>

          <ul>
            <li>
              <NavLink className="tags" to="/characters">
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink className="tags" to="/episodes">
                Episodes
              </NavLink>
            </li>
            <li>
              <NavLink className="tags" to="/locations">
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink className="tags" to="/list">
                My watch list
              </NavLink>
            </li>
          </ul>
        </div>
      </MenuStyled>
    </>
  );
};

export default Menu;
