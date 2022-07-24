import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('02-template-strings UT', () => {
    test('getSaludo should return hola + nombre', () => {
       const name = 'Ricardo';
       const expectedGreeting = 'Hola Ricardo';
       const greeting = getSaludo(name);
       expect(greeting).toBe(expectedGreeting);
    });
});
