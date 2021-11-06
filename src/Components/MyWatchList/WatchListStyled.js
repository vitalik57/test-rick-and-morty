import styled from "styled-components";

export const WatchListStyled = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  .IconButton {
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: white;
  font: inherit;
  background-color: green;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.TodoList {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 24px;
}

.TodoList__item {
  
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;

 
}

.TodoList__text {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;

  .TodoList__item--completed & {
    text-decoration: line-through;
  }
}

.TodoList__checkbox {
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.TodoList__btn {


  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: $indigo;
  color: $white;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: indigo-accent;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
}

  .TodoEditor {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 20px;
}

.TodoEditor__textarea {
  line-height: 16px;

  height: line-height * 3 + 24px;
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: line-height;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
}

.TodoEditor__button {

  width: 100%;
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: $indigo;
  color: $white;
  font-weight: 500;
.TodoFilter {
  width: 400px;
  margin-bottom: 20px;
}

.TodoFilter__label {
  margin-top: 0;
  margin-bottom: 5px;
}

.TodoFilter__input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font-family: inherit;
  line-height: 1.3;
  letter-spacing: 0.01em;
}

  &:hover,
  &:focus {
    background-color: indigo-accent;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
}
  .Modal__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .Modal__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 300px;
    max-width: 600px;
    width: 100%;
    padding: 12px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  body {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(#f00000, #dc281e);
    font-family: sans-serif;
  }
  .container {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  button:hover {
    cursor: pointer;
    background-color: #73e831;
  }

  ul {
    list-style-type: none;
  }

  .container {
    min-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  h1 {
    color: #fff;
    font-size: 3rem;
  }



  .todo-form {
    margin: 40px 0px;
  }

  .todo-input {
    width: 250px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px;
    margin-right: 10px;
    font-size: 1rem;
  }

  .add-button {
    background-color: #0000ff;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 7px;
    font-size: 1.2rem;
  }


  .todo-items {
    min-width: 350px;
  }


  .item {
    background-color: #fff;
    padding: 10px;
    font-size: 1.1rem;
  }

  .item:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .item:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }


  .checkbox {
    margin-right: 10px;
  }

  .delete-button {
    float: right;
    background-color: #dc143c;
    border: none;
    outline: none;
    border-radius: 7px;
    padding: 2px 5px;
    margin-left: 10px;
    font-size: 1.1rem;
    font-weight: 550;
  }

  /* .checked {
    text-decoration: line-through;
  } */


`;
