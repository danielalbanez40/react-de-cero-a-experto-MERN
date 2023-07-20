import PropTypes from "prop-types";
import useForm from "../Hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const { description, handleInputChange, handleReset } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: crypto.randomUUID(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    handleReset();
  };

 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={handleInputChange}
          onReset={handleReset}
        />

        <button
          type="submit"
          className="btn btn-outline-success mt-2"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func,
};

export default TodoAdd;
