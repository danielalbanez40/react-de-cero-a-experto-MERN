import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import useTodo from "../Hooks/useTodo";

const ToDoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
  } = useTodo();

  return (
    <>
      <h1>ToDoApp: {todosCount} </h1>
      <small>Pendientes: {pendingTodosCount}</small>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
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
