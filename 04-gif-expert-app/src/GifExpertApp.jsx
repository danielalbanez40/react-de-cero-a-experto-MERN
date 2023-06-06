import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball Z"]);

  const handleAddCategory = (newCategory) => {
    console.log(newCategory);
    const addCategory = [...categories, newCategory];
    setCategories(addCategory);
    // setCategories(cat => addCategory);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        /*setCategories={setCategories}*/
        onNewCategory={(value)=>handleAddCategory(value)}
      />

      {/* Listado de Gifs */}
      {/* <button onClick={handleAddCategory}>Agregar</button> */}
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
