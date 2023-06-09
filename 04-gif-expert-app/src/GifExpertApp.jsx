import { useState } from "react";
import AddCategory from "./components/AddCategory/AddCategory";
import GifGrid from "./components/GifGrid/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    const addCategory = [...categories, newCategory];
    setCategories(addCategory);
    // setCategories(cat => addCategory);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        /*setCategories={setCategories}*/
        onNewCategory={(value) => handleAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
