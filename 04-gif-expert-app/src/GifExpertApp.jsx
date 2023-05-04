import { useState } from 'react';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z']);

  const handleAddCategory = () => {

    console.log(categories);
    const addCategory = [...categories,'Valorant']
    setCategories(addCategory);
    // setCategories(cat => addCategory);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input  */}

      {/* Listado de Gifs */}
      <button onClick={handleAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};

export default GifExpertApp;
