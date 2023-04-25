import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-import-export';

describe('Pruebas en 08-import-export', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe retornar undefined si el héroe no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });
});

//Tarea
// Debe retornar un arreglo con los héroes de DC
// Length === 3
// toEqual al arreglo filtrado

test('getHeroesByOwner debe retornar un héroe de DC', () => {
  const owner = 'DC';
  const hero = getHeroesByOwner(owner);
  expect(hero.length).toBe(3);
  expect(hero).toEqual([
    {
      id: 1,
      name: 'Batman',
      owner: 'DC',
    },
    {
      id: 3,
      name: 'Superman',
      owner: 'DC',
    },
    {
      id: 4,
      name: 'Flash',
      owner: 'DC',
    },
  ]);
});

// Debe retornar un arreglo con dos héroes de Marvel
// Length === 2

test('getHeroesByOwner debe retornar un héroe de Marvel', () => {
  const owner = 'Marvel';
  const hero = getHeroesByOwner(owner);
  expect(hero.length).toBe(2);
  expect(hero).toEqual([
    {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel',
    },
    {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel',
    }
  ]);
});

