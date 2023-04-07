import getHeroeById from './bases/08-import-export';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     const heroe = getHeroeById(2);
//     // console.log(heroe);
//     resolve(heroe);
//     // reject('No se pudo encontrar el Heroe: ');
//     // console.log('2 Segundos después');

//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log('Heroe: ', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      const heroe = getHeroeById(id);
    //   console.log(heroe);

      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el Heroe ');
      }

      // console.log('2 Segundos después');
    }, 2000);
  });
};

getHeroeByIdAsync(10)
  .then((heroe) => console.log('Heroe', heroe))
  .catch((err) => console.error(err));
