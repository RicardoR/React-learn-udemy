const person = {
    name: 'John',
    surname: 'Smith',
    age: 30,
    family: ['Jane', 'Mark', 'Bob'],
    address: {
        city: 'New York',
        country: 'USA',
        zipCode: '100000',
        lat: 40.7128,
        lng: -74.0060
    },
};

const newPerson = { ...person };
person.name = 'Piter';
person.address.city = 'Moscow';

console.log('person1:');
console.table(person);
console.log('person1', person);

console.log('new person', newPerson);