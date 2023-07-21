import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleteTodo: PropTypes.func,
};

export default TodoList;
