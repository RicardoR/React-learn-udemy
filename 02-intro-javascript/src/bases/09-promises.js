import { getHeroById } from "./bases/08-export-import-data";

const getHeroFromApi = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const hero = getHeroById(id);
        hero ? resolve(hero) : reject(`Hero with id ${id} not found `);
    }, 2000)
});

getHeroFromApi(30)
    .then(data => console.log(data))
    .catch(err => console.warn(err));

getHeroFromApi(3).then(data => console.log(data));