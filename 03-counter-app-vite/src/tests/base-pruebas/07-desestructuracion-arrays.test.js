import { retornaArreglo } from "../../base-pruebas/07-desestructuracion-arrays";

describe('Pruebas en 07-desestruccturación Arrays', () => {
  test('should return a string and number', () => {
    const [letters, numbers] = retornaArreglo();
 
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')
  
    expect(letters).toEqual(expect.any(String))

  });
});
