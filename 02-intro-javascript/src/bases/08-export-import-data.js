import { heroes } from "../data/heroes";


const getHeroById = (id) => heroes.find((hero) => hero.id === id);
console.log(getHeroById(2));
console.log(getHeroById(3));
console.log(getHeroById(1));

const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
console.log(getHeroByOwner('DC'));