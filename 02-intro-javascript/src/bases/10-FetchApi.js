// FETCH API
// lbEp0L5We0t2TM5I9315mYfYuPNBBPp8
const ApiKey = import.meta.VITE_GIPHY_REACT_APP;

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=lbEp0L5We0t2TM5I9315mYfYuPNBBPp8`,
);

peticion
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })

  // peticion.then(res => {
  //     res.json().then(data => {
  //         console.log(data);
  //     });
  //     console.log(res);
  // })
  .catch(console.warn);
