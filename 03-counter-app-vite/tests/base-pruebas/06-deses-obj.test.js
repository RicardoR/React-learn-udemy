import {usContext} from "../../src/base-pruebas/06-deses-obj";

describe('06-deses-obj UT', () => {
   test('usContext should return an expected object', () => {
       const persona = {
           edad: 45,
           clave: 'Ironman'
       };

       const expectedUser = {
           nombreClave: persona.clave,
           anios: persona.edad,
           latlng: { lat: 14.1232, lng: -12.3232 }
       };

       const userContext = usContext(persona);
       expect(userContext).toStrictEqual(expectedUser);
   })
});
