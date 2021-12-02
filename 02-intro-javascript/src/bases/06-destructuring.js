const person = {
    personName: 'John',
    age: 30,
    key: 'Ironman'
};

const { age, personName, key } = person;

console.log(personName);
console.log(age);
console.log(key);

const getPerson = ({ key, personName, age, range = 'Captain'}) => {
    console.log(personName, age, range);
    
    return {
        personKeyName: key,
        personAge: age,
        latlng: {
            lat: '-33.8688',
            lng: '151.2195'
        }
    }
}

const { personKeyName, personAge, latlng: {lat, lng} } = getPerson(person);
console.log(personKeyName, personAge);
console.log(lat, lng);