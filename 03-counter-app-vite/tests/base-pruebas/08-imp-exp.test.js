import {getHeroById, getHeroByOwner} from "../../../02-intro-javascript/src/bases/08-export-import-data";


describe('08-im-exp UT', () => {
    test('getHeroeById should return an existing hero', () => {
        const hero = getHeroById(1);
        expect(hero).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById should return undefined when hero does not exists', () => {
        const hero = getHeroById(-1);
        expect(hero).toBeUndefined();
    });

    test('getHeroesByOwner should return the marvel list', () => {
        const heroList = getHeroByOwner('Marvel');
        expect(heroList.length).toBe(2);
    });

    test('getHeroesByOwner should return the DC list', () => {
        const heroList = getHeroByOwner('DC');
        expect(heroList.length).toBe(3);
    });

    test('getHeroesByOwner should return an empty array when owner does not exists', () => {
        const heroList = getHeroByOwner('ey!');
        expect(heroList.length).toBe(0);
    });
});
