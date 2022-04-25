import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  if (!name.trim()) {
    return [];
  }

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
