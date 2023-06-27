import { useState } from "react";
import PropTypes from 'prop-types'

const AddCategory = ({ onNewCategory }) => {
  const [inputsearch, setInputsearch] = useState("");

  const handleChange = ({target}) => {
    setInputsearch(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputsearch.trim().length <= 1) return;

    // setCategories(categories => [inputsearch, ...categories]);
    setInputsearch('')
    onNewCategory(inputsearch.trim())
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar Gifs"
        value={inputsearch}
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}

export default AddCategory;
