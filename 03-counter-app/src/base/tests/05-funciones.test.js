import { getUser, getActiveUser } from '../05-funciones';

describe('05-funciones', () => {
    test('getUser should return an user', () => {
        const expectedUser = {
          uid: 'ABC123',
          username: 'El_Papi1502',
        };

        expect(expectedUser).toEqual(getUser());
    });

    test('getActiveUser should return an active user', () => {
        const userName = 'Ricardo';
        const activeUser = getActiveUser(userName);
        
        expect(activeUser.username).toBe(userName);
        expect(activeUser.uid).toBe('ABC567');
    });
});