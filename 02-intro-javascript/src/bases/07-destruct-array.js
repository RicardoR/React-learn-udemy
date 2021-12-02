const characters = ['Goku', 'Vegeta', 'Trunks'];

const [ goku, vegeta, trunks ] = characters;
const [ , , character3 ] = characters;

console.log(character3);
console.log(goku, vegeta, trunks);


const getArray = () => ['abc', 123];

const [ str, num ] = getArray();

console.log(str, num);


const userState = (value) => {
    return [value, () => console.log('hey ho! lets go')];
}

const [state, setState] = userState(10);
console.log(state);
setState();