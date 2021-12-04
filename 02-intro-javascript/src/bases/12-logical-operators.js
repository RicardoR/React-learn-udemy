const isActive = false;

const message = isActive ? 'Is active' : 'Is not active';
const messageWhenActive = isActive && 'Is active';

const nullData = null;
const newData = nullData ?? 'No data';

console.log(message);
console.log(messageWhenActive);
console.log(newData);