// import React, { Component, useEffect, useState } from "react";
// import { useLocalStorageState } from "react-localstorage-hooks";
// import { v4 as uuidv4 } from "uuid";
// import { WatchListStyled } from "./WatchListStyled";
import React, { Component } from "react";
import shortid from "shortid";
import Container from "./components/Container";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/TodoFilter";
import Modal from "./components/Modal";
import IconButton from "./components/IconButton";
import { ReactComponent as AddIcon } from "./icons/add.svg";
const initialState = { message: "" };
// const MyWatchList = () => {
//   const [state, setState] = useState(initialState);
//   // const handleChange = event => {
//   //   const input = event.target;
//   //   const value = input.type === "checkbox" ? input.checked : input.value;

//   //   setState(prev => ({ ...prev, [input.name]: value }));
//   // };
//   // useEffect(() => {
//   //   // console.log(localStorage.getItem());
//   // }, []);
//   // const handleFormSubmit = event => {
//   //   event.preventDefault();
//   //   addTodo(state.todo__input);
//   // };
//   // const todoItemsList = document.querySelector(".todo-items");
//   // let todos = [];
//   // function addTodo(item) {
//   //   // if item is not empty
//   //   if (item !== "") {
//   //     // make a todo object, which has id, name, and completed properties
//   //     const todo = {
//   //       id: Date.now(),
//   //       name: item,
//   //       completed: false
//   //     };

//   //     // then add it to todos array
//   //     todos.push(todo);
//   //     renderTodos(todos); // then renders them between <ul>

//   //     // finally clear the input box value
//   //     reset();
//   //   }
//   // }
//   // function renderTodos(todos) {
//   //   // clear everything inside <ul> with class=todo-items
//   //   todoItemsList.innerHTML = "";

//   //   // run through each item inside todos
//   //   todos.forEach(function(item) {
//   //     // check if the item is completed
//   //     const checked = item.completed ? "checked" : null;

//   //     // make a <li> element and fill it
//   //     // <li> </li>
//   //     const li = document.createElement("li");
//   //     // <li class="item"> </li>
//   //     li.setAttribute("class", "item");
//   //     // <li class="item" data-key="20200708"> </li>
//   //     li.setAttribute("data-key", item.id);
//   //     /* <li class="item" data-key="20200708">
//   //         <input type="checkbox" class="checkbox">
//   //         Go to Gym
//   //         <button class="delete-button">X</button>
//   //       </li> */
//   //     // if item is completed, then add a class to <li> called 'checked', which will add line-through style
//   //     if (item.completed === true) {
//   //       li.classList.add("checked");
//   //     }

//   //     li.innerHTML = `
//   //     <input type="checkbox" class="checkbox" ${checked}>
//   //     ${item.name}
//   //     <button class="delete-button">X</button>
//   //   `;
//   //     // finally add the <li> to the <ul>
//   //     todoItemsList.append(li);
//   //   });
//   // }
//   // const reset = () => {
//   //   setState({ todo__input: "" });
//   // };
//   // // const handleFormSubmit = () => {
//   // //   // const { user, rememberMe } = this.state;
//   // //   localStorage.setItem(JSON.stringify(uuidv4()), JSON.stringify({ rememberMe: state.rememberMe, user: state.user }));
//   // //   // localStorage.setItem("user", JSON.stringify(state.user));
//   // // };
//   const handleChange = e => {
//     setState({ message: e.currentTarget.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.message !== "") {
//       this.props.onSubmit(this.state.message);
//       this.props.onSave();
//       setState({ message: "" });
//       return;
//     }

//     alert("Заполни текст заметки.");
//   };
//   return (
//     <>
//       {" "}
//       {/* <form onSubmit={handleFormSubmit}>
//         <label>
//           User: <input name="user" value={state.user} onChange={handleChange} />
//         </label>
//         <label>
//           <input name="rememberMe" checked={state.rememberMe} onChange={handleChange} type="checkbox" /> Remember me
//         </label>
//         <button type="submit">Sign In</button>
//       </form> */}
//       <WatchListStyled>
//         <form className="TodoEditor" onSubmit={this.handleSubmit}>
//           <textarea className="TodoEditor__textarea" value={this.state.message} onChange={this.handleChange} />
//           <button type="submit" className="TodoEditor__button">
//             Сохранить
//           </button>
//         </form>
//       </WatchListStyled>
//     </>
//   );
// };
// // const MyWatchList = () => {
// //   const [count, setCount] = useLocalStorageState("counter", { initialState: 0 });

// //   return (
// //     <>
// //       Count: {count}
// //       <button onClick={() => setCount(count + 1)}>+</button>
// //       <button onClick={() => setCount(c => c - 1)}>-</button>
// //     </>
// //   );
// // };

// export default MyWatchList;

class MyWatchList extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log("Обновилось поле todos, записываю todos в хранилище");
      localStorage.setItem("todos", JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos]
    }));

    // this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(({ id }) => id !== todoId)
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo))
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ text }) => text.toLowerCase().includes(normalizedFilter));
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        {/* TODO: вынести в отдельный компонент */}
        <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
      </Container>
    );
  }
}
export default MyWatchList;
