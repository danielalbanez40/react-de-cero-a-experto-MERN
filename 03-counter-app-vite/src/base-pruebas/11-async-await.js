export const getImage = async () => {
  try {
    const ApiKey = import.meta.VITE_GIPHY_REACT_APP;
    
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=lbEp0L5We0t2TM5I9315mYfYuPNBBPp8`,
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    
    return url;

  } catch (error) {
    // Manejo del Error
    console.error(error);
    return 'No se encontró la imagen'
  }
};

getImage();
