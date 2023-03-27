// async await

// const getImagePromesa = () => new Promise((resolve) =>  resolve('https://asdasdasdasdasd.com'))
// getImagePromesa().then(console.log)

const getImage = async () => {
  try {
    const ApiKey = import.meta.VITE_GIPHY_REACT_APP;
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=lbEp0L5We0t2TM5I9315mYfYuPNBBPp8`,
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // Manejo del Error
    console.error(error);
  }
};

getImage();
