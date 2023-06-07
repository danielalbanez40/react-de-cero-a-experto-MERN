import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputsearch, setInputsearch] = useState("");

  const handleChange = (e) => {
    setInputsearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputsearch.trim().length <= 1) return;

    // setCategories(categories => [inputsearch, ...categories]);
    onNewCategory(inputsearch.trim())
    setInputsearch('')
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

export default AddCategory;
