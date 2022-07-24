import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr";

describe('07-deses-arr UT', () => {
   test('retornaArreglo should return an array', () => {
     const [letters, numbers] = retornaArreglo();
     expect(letters).toBe('ABC');
     expect(numbers).toBe(123);
   });
});
