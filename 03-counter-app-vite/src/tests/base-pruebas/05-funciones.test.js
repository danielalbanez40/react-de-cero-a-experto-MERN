import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-Funciones', () => {
  test('getUser debería retornar un objeto', () => {
    const testUser = { uid: 'ABC123', username: 'El_Papi1502' };
    const user = getUser();
    console.log(user);
    expect(testUser).toEqual(user);
  });
});

test('getUsuarioActivo debe retornar un objeto', () => {
  const name = 'Daniel';
  const user = getUsuarioActivo(name);
  console.log(user);
  expect(user).toStrictEqual({ uid: 'ABC123', username: name });
});
