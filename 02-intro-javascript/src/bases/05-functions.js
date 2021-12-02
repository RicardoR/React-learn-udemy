const greeting = (name) => `Hello ${name}`;

console.log(greeting('John'));

const getUser = () => ({
    uid: 'ABC123',
    username: 'john'
});

console.log(getUser());

const getActiveUser = (name) => ({
    uid: 'ABCD',
    username: name
});

const user = getActiveUser('John');
console.log(user);