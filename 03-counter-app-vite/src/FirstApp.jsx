import React from 'react';

const developer = {
    name: 'Ricardo',
    surname: 'Rodríguez',
    age: 41
};

const getSum = (a,b) => {
    return a + b;
};

export const FirstApp = () => {

    return (
        <>
            <h1> Name: { developer.name } </h1>
            <p> Surname: { developer.surname } </p>
            <span> Age: { developer.age } years </span>
            <hr/>
            <code>
                { JSON.stringify(developer) }
            </code>
            <hr/>
            <div> Sum: { getSum(2,2) } </div>
        </>
    );
};
