import React from 'react';
import {useFetch} from "../hooks/useFetch.js";

export const MultipleCustomHooks = () => {

    const {data, isLoading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/1');

    console.log(data, isLoading, hasError)
    return (
        <>
            <h1> breaking bad Quotes</h1>
        </>
    );
};



