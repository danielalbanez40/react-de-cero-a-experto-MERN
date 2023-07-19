import { useReducer } from "react";
import todoReducer from "./todo-reducer";

const initialState = [
  {
    id: crypto.randomUUID,
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: crypto.randomUUID,
    description: "Recolectar la piedra del alma",
    done: false,
  },
];

const ToDoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>ToDo App</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
};

export default ToDoApp;
