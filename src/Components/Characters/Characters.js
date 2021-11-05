import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../Components/styled.module.css";
import CharactersList from "./CharactersList";
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
      <div className={styles.back}>
        <button type="button" onClick={alive}>
          all alive
        </button>
        <button type="button" onClick={dead}>
          all Dead
        </button>
        <button type="button" onClick={human}>
          Human
        </button>{" "}
        <button type="button" onClick={alien}>
          Alien
        </button>
        <ul className={styles.cart__set}>
          <CharactersList characters={state.characters} />
          {state.characters.map(character => (
            // <li key={character.id}>
            //   <h2>{character.name}</h2>
            //   <img src={character.image || ""} alt={character.image} />
            // </li>

            <li className={styles.fon}>
              <a className={styles.sulka} href="">
                <div className={styles.product__thumb}>
                  <div className={styles.corect__photo}>
                    <img className={styles.jpg} src={character.image} width="370px" alt={character.image} />{" "}
                    <div className={styles.apasition}>
                      <p>Status:{character.status}</p>
                      <p>Species:{character.species}</p>
                      <p>Origin name {character.origin.name}</p>
                      <p>Location {character.location.name}</p>
                    </div>
                  </div>
                  <div className={styles.fontos}>
                    <h3 className={styles.techno}>Name:{character.name}</h3>
                    <p className={styles.site}>Species: {character.species}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Characters;
