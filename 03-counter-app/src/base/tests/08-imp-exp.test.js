import { getHeroeById, getHeroesByOwner } from '../08-imp-exp';
import heroes from '../../data/heroes';

describe('08-imp-exp', () => {
    test('getHeroeById should return an heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(heroes[0]);
    });
    
    test('getHeroeById should undefined when heroe id not exists', () => {
        const id = -1;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('getHeroesByOwner should find DC heroes', () => {
        const owner = 'DC';
        const heroeList = getHeroesByOwner(owner);
        expect(heroeList).toEqual(heroes.filter(h => h.owner === owner));
    });
    
    test('getHeroesByOwner should find Marvel heroes', () => {
      const owner = 'Marvel';
      const heroeList = getHeroesByOwner(owner);
      expect(heroeList.length).toBe(2);
    });
    
    test('getHeroesByOwner should return an empty array if owner doesnt exists', () => {
        const heroeList = getHeroesByOwner('Not found');
        expect(heroeList).toEqual([]);
    });
});