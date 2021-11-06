import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../Components/styled.module.css";
import { CharactersStyled } from "./CharactersStyled";
const Characters = () => {
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(response => setstate({ characters: response.data.results }));
  }, []);
  const [state, setstate] = useState({ characters: [] });
  const alive = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => setstate({ characters: response.data.results.filter(character => character.status === "Alive") }));
  };
  const dead = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => setstate({ characters: response.data.results.filter(character => character.status === "Dead") }));
  };
  const human = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => setstate({ characters: response.data.results.filter(character => character.species === "Human") }));
  };
  const alien = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => setstate({ characters: response.data.results.filter(character => character.species === "Alien") }));
  };
  return (
    <>
      <CharactersStyled>
        {" "}
        <div className={styles.back}>
          <div>
            {" "}
            <ul className="filtered__buttons">
              <li>
                {" "}
                <button type="button" onClick={alive}>
                  All alive
                </button>
              </li>
              <li>
                {" "}
                <button type="button" onClick={dead}>
                  All Dead
                </button>
              </li>
              <li>
                {" "}
                <button type="button" onClick={human}>
                  Human
                </button>
              </li>
              <li>
                <button type="button" onClick={alien}>
                  Alien
                </button>
              </li>
            </ul>
          </div>{" "}
          <ul className="cart__set">
            {state.characters.map(character => (
              // <li key={character.id}>
              //   <h2>{character.name}</h2>
              //   <img src={character.image || ""} alt={character.image} />
              // </li>

              <li className="fon">
                <a className="sulka" href="">
                  <div className="product__thumb">
                    <div className="corect__photo">
                      <img className="jpg" src={character.image} width="370px" alt={character.image} />{" "}
                      <div className="apasition">
                        <p>Status:{character.status}</p>
                        <p>Species:{character.species}</p>
                        <p>Origin name: {character.origin.name}</p>
                        <p>Location: {character.location.name}</p>
                      </div>
                    </div>
                    <div className="fontos">
                      <h3 className="techno">Name:{character.name}</h3>
                      <p className="site">Species: {character.species}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CharactersStyled>
    </>
  );
};

export default Characters;
