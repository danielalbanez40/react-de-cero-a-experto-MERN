import { getHeroeByIdAsync } from "../../base-pruebas/09-promises";

describe('Pruebas en 09-Promesas', () => {
  test('getHeroesByIdAsync debe retornar un héroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      done();
    });
  });
  
  test('getHeroesByIdAsync debe lanzar un error si un héroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
    // .then(hero =>{
    //   expect(hero).toBeFalsy();
    //   done();
    // })
     .catch((error) => {
      expect(error).toBe(`No se pudo encontrar el Héroe ${id}`)
      
      done();
    });
  });
});
