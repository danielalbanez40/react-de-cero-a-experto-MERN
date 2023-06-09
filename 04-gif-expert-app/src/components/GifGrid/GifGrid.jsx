import { useEffect, useState } from "react";
// import getGifs from "../../helpers/getGifs";
import GifItem from "../GifItem/GifItem";
import useFetchGifs from "../../hooks/useFetchGifs/useFetchGifs";

const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs(category)
   

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image}/>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
