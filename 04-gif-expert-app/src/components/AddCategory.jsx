import { useState } from 'react';

const AddCategory = () => {
  const [inputsearch, setInputsearch] = useState('One Punch');

  const handleChange = (e) => {
    setInputsearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputsearch);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Buscar Gifs" value={inputsearch} onChange={handleChange} />
    </form>
  );
};

export default AddCategory;
