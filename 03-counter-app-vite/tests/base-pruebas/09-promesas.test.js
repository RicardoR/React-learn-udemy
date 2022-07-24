import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas";

describe('09-promesas UT', () => {
    test('getHeroeByIdAsync should return an hero promise', (done) => {
        getHeroeByIdAsync(1)
            .then(hero => {
                expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
                done();
            });
    });

    test('getHeroeByIdAsync should return an exception when hero id does not exists', (done) => {
        getHeroeByIdAsync(-1)
            .then()
            .catch((e) => {
                expect(e).toBe('No se pudo encontrar el héroe -1');
                done();
            })
    });
});
