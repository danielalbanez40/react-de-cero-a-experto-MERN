import { useReducer } from "react";
import todoReducer from "./todo-reducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [
  {
    id: crypto.randomUUID(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Recolectar la piedra del tiempo",
    done: false,
  },
];

const ToDoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "ADD_TODO",
      payload: todo,
    };

    dispatch(action)
  };

  return (
    <>
      <h1>ToDoApp: 10 </h1>
      <small>Pendientes: 2 </small>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
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
