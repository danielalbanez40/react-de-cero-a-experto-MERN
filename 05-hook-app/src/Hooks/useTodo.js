import { useEffect, useReducer } from "react";
import todoReducer from "../08-useReducer/todo-reducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const newTodoAction = {
      type: "ADD_TODO",
      payload: todo,
    };

    dispatch(newTodoAction);
  };

  const handleDeleteTodo = (id) => {
    const deleteTodoAction = {
      type: "DELETE_TODO",
      payload: id,
    };

    dispatch(deleteTodoAction);
  };

  const handleToggleTodo = (id) => {
    const toggleTodoAction = {
      type: "TOGGLE_TODO",
      payload: id,
    };

    dispatch(toggleTodoAction);
  };

  const todosCount = () => {
    todos.length;
  };
  const pendingTodosCount = () => {
    todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};

export default useTodo;
