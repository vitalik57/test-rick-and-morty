import React, { Component, useState } from "react";
const TodoEditor = ({ onSubmit }) => {
  const [state, setState] = useState({
    message: ""
  });
  const handleChange = e => {
    setState({ message: e.currentTarget.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state.message);

    setState({ message: "" });
  };

  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <textarea className="TodoEditor__textarea" value={state.message} onChange={handleChange} />
      <button type="submit" className="TodoEditor__button">
        Сохранить
      </button>
    </form>
  );
};

export default TodoEditor;
