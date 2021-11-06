import styled from "styled-components";
export const CharactersStyled = styled.div`
  .back {
    background: url(../../src/Components/image/1005x558_2021090718243453b0690203.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .filtered__buttons {
    margin: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 20px;
  }
  button {
    /* width: 90px;
    height: 30px;
    background-color: rgba(79, 97, 112, 0.9);
    border-radius: 16px; */
    display: block;
    font-size: 1.1em;
    width: 120px;
    height: 60px;
    text-decoration: none;
    text-align: center;
    font: bold 14px arial;
    text-transform: uppercase;
    padding: 10px 15px;
    margin: 20px auto;
    color: #ccc;
    background-color: #555;
    background-image: linear-gradient(top, #888 0%, #555 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #888), color-stop(1, #555));
    background-image: -moz-linear-gradient(top, #888 0%, #555 100%);
    background-image: -o-linear-gradient(top, #888 0%, #555 100%);
    border: none;
    border-radius: 3px;
    text-shadow: 0px -1px 0px #000;
    box-shadow: 0px 1px 0px #666, 0px 5px 0px #444, 0px 6px 6px rgba(0, 0, 0, 0.6);
    -webkit-transition: ease 0.15s all;
    -moz-transition: ease 0.15s all;
    -o-transition: ease 0.15s all;
    transition: ease 0.15s all;
    -webkit-animation: none;
    -moz-animation: none;
    -o-animation: none;
    animation: none;
  }
  button:hover {
    background-color: #aaaaaa;
    background-image: -webkit-linear-gradient(top, #ccc, #555);
    background-image: -moz-linear-gradient(top, #ccc, #555);
    background-image: -o-linear-gradient(top, #ccc, #555);
    background-image: linear-gradient(to bottom, #ccc, #555);
  }
  .fon {
    list-style: none;
    width: 370px;
    background-color: #ffffff;
    margin-top: 30px;
    margin-left: 30px;
    border: 1px solid #eeeeee;
  }
  .fon:nth-child(2n + 1) {
    margin-right: 0px;
  }
  .sulka {
    text-decoration: none;
  }
  .sulka:hover .apasition,
  .sulka:focus .apasition {
    top: 0;
    opacity: 1;
  }
  .corect-photo:hover.apasition {
    opacity: 1;
  }
  .corect-photo {
    width: 370px;
    position: relative;
    overflow: hidden;
  }

  .product__thumb {
    position: relative;
    overflow: hidden;
  }
  .product__thumb:hover {
    top: 0;
  }
  .corect-photo:hover.apasition {
    opacity: 1;
  }
  .corect__photo {
    width: 370px;
    position: relative;
    overflow: hidden;
  }
  .jpg {
    width: 100%;
  }
  .apasition {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 63px 24px;
    top: 100%;
    right: 0%;
    margin: 0;
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0.03em;
    background-color: rgba(79, 97, 112, 0.9);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .sulka:hover .apasition,
  .sulka:focus .apasition {
    top: 0;
    opacity: 1;
  }
  .corect__photo:hover.apasition {
    opacity: 1;
  }
  .fontos {
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 20px;
  }
  .techno {
    display: flex;
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 4px;
    margin: 0px;
    line-height: 2;
    letter-spacing: 0.06em;
    color: var(--primary-text-color);
  }

  .site {
    margin: 0px;
    font-size: 16px;
    line-height: 1.8;
    color: var(--title-text-color);
  }
  .cart__set {
    margin: 0;
    padding: 0;
    width: auto;
    flex-basis: calc(100% / 3 - 30px);
    display: flex;
    flex-wrap: wrap;
  }
`;
