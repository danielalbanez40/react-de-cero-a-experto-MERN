// Funciones en JS

// function saludar(nombre) {
//   return `Hola, ${nombre}`
// }

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

// const getUser = () => {
//   return { uid: 'ABC123', username: 'El_Papi1502' };
// };

const getUser = () => ({ uid: 'ABC123', username: 'El_Papi1502' });

const user = getUser();

console.log(user);

// TAREA:
// 1. Transformar a funcion flecha
// 2. Debe retornar un objeto implícito
// 3.Pruebas

const getUsuarioActivo = (nombre) => ({ uid: 'ABC123', username: nombre });


const usuarioActivo = getUsuarioActivo('Daniel');
console.log(usuarioActivo);



