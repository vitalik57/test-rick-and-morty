import styled from "styled-components";
export const MenuStyled = styled.div`
  padding: 20px 30px;
  background: white;
  font-family: "Roboto", sans-serif;
  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #222;
    font-size: 16px;
    padding-left: 15px;
    margin-bottom: 15px;
    border-left: 2px solid #b99d61;
  }
  ul {
    padding: 0;
    list-style: none;
  }
  .tags {
    text-decoration: none;
    outline: none;
    display: block;
    padding: 6px 0;
    letter-spacing: 1px;
    font-weight: 300;
    color: #444;
    transition: 0.3s linear;
  }
  .tags:hover {
    color: #b99d61;
  }
`;
