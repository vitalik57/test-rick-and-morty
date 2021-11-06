import styled from "styled-components";
export const EpisodeStyled = styled.div`
  padding: 20px;
  .input__list {
    display: flex;
    margin: 0;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    padding-right: 40px;
  }
  .location__input {
    display: flex;
    padding: 10px;
  }
  .find__name {
    color: #343434;
    font-weight: normal;
    font-family: "Ultra", sans-serif;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  .filtered__li {
    opacity: 0.7;
  }
  input {
    border-radius: 16px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin-right: 30px;
    opacity: 0.65;
  }
  .location__container {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding-right: 20px;
  }
  h2 {
    margin: 0;
  }
  input {
    padding: 20px;
  }
  .location__planet {
    margin: 0;
    width: 350px;
  }
  .location__planet {
    text-shadow: 0 -1px rgb(0 0 0 / 60%);

    background: #355681;
    background: rgba(53, 86, 129, 0.8);
    border: 1px solid #fff;
    padding: 5px 15px;
    color: white;

    box-shadow: inset 0 0 5px rgb(53 86 129 / 50%);
    font-family: "Muli", sans-serif;
  }
`;
