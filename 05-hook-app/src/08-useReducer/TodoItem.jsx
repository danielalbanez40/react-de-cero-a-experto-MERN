import { PropTypes } from "prop-types";

const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self">{todo.description}</span>
        <button
          className="btn btn-outline-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>{" "}
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDeleteTodo: PropTypes.func,
};

export default TodoItem;
