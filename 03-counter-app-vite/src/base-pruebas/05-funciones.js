
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

export const getUser = () => ({ uid: 'ABC123', username: 'El_Papi1502' });

// TAREA:
// 1. Transformar a funcion flecha
// 2. Debe retornar un objeto implícito
// 3.Pruebas

export const getUsuarioActivo = (nombre) => ({ uid: 'ABC123', username: nombre });




