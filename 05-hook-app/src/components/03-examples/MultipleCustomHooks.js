import React from 'react'
import { useFetch } from '../../hooks/useFetch';

import './multiple-custom.css';

export const MultipleCustomHooks = () => {

	const state =  useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

	console.log('state', state);

    return (
        <>
         	<h1>Multiple custom hooks</h1>   
        </>
    )
}
