import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones";

describe('05-funciones UT', () => {
    test('getUser should return an object user', () => {
        const user = getUser();
        expect(user).toEqual({
            uid: 'ABC123',
            username: 'El_Papi1502'
        });
    });

    test('getUsuarioActivo should return an active user', () => {
        const userName = 'Ricardo';
        const activeUser = getUsuarioActivo(userName);
        expect(activeUser).toEqual({
            uid: 'ABC567',
            username: userName
        })
    })
});
