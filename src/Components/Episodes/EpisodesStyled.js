import styled from "styled-components";

export const EpisodesStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    margin: 0;
    padding: 0;
  }
  h2:hover {
    text-shadow: -1px -1px #000, 0 1px 0 #444;
    color: #1a1a1a;
  }
  .form__name {
    text-align: center;
    margin: 1 em 0 0.5 em 0;
    color: #343434;
    /* font-weight: normal; */
    font-family: "Ultra", sans-serif;
    font-size: 44px;
    line-height: 60px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
  }
  .form__gender {
    padding-top: 20px;
    margin: 0;
    text-align: left;
    font-style: bold;
    color: #5b5b5b;
    font-size: 18px;
    line-height: 22px;
  }

  .form__input {
    width: 587px;
    opacity: 0.7;
    box-sizing: border-box;
    outline: none;
    border-radius: 16px;
    padding: 10px 10px;
    color: #5b5b5b;
    border: 3px solid #c1c1c1;
    margin-top: 8px;
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 768px) {
      padding: 10px 15px;
    }
  }
  .form__input:focus {
    border: 1px solid #87d78b;
  }

  .gender__name {
    margin: 0;
    padding-top: 8px;
    color: #5b5b5b;
  }
  ul {
    list-style: none;
    text-align: left;
    margin: 0;
    padding-top: 20px;
    padding-left: 0;
  }
  li {
    padding-top: 10px;
    font-style: bold;
    text-shadow: -1px -1px #000, 0 1px 0 #444;
    color: #222;
    transition: all 1s;
    font-size: 35px;
    line-height: 22px;
    border: 2px solid #5b5b5b;
    padding: 5px;
    border-bottom: 1px solid #5b5b5b;
  }
`;
