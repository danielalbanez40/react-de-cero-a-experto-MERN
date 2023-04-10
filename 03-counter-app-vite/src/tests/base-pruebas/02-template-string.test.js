import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string',() => {
    test('getSaludo debe retornar el string "Hola Daniel"', () => {
        const nombre = 'Daniel';
        const message = getSaludo(nombre);

        expect(message).toBe(`Hola ${nombre}`);

    });
});
