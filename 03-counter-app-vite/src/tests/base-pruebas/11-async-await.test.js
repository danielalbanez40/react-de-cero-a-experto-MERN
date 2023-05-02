import { getImage } from "../../base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe retornar error si no tenemos la api key', async () => {

    const resp = await getImage();
    
    expect(resp).toBe('No se encontró la imagen');

  });
});
