import { useEffect, useReducer } from "react";
import todoReducer from "./todo-reducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const ToDoApp = () => {
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

  return (
    <>
      <h1>ToDoApp: 10 </h1>
      <small>Pendientes: 2 </small>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4> 
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
