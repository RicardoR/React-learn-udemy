import heroes from '../../data/heroes';
import { getHeroeByIdAsync } from '../09-promesas';

describe('09-promesas', () => {
    test('getHeroeByIdAsync should return an object heroe', (done) => {
        const heroeId = 1;
        getHeroeByIdAsync(heroeId)
            .then(heroe => {
                expect(heroe).toEqual(heroes[0]);
                done();
            });
    });

    test('getHeroeByIdAsync should return an error when heroe doenst exists', (done) => {
        const heroeId = -1;
        getHeroeByIdAsync(heroeId)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done(); 
            });
    });
})