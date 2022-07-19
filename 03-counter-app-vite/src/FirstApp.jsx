import React from 'react';

const getSum = (a,b) => {
    return a + b;
};

export const FirstApp = ({name, surname, age}) => {


    return (
        <>
            <h1> Name: { name } </h1>
            <p> Surname: { surname } </p>
            <span> Age: { age } years </span>
            <hr/>
            <div> Sum: { getSum(2,2) } </div>
        </>
    );
};
