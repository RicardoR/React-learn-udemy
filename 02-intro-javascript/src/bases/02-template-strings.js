const NAME = 'Ricardo';
const SURNAME = 'Rodríguez';

const COMPLETE_NAME = `${NAME} ${SURNAME}`;

console.log(COMPLETE_NAME);

function getGreeting(name) {
    return `Hi ${name}`;
}

console.log(`This is the greeting ===> ${ getGreeting(COMPLETE_NAME) }`);