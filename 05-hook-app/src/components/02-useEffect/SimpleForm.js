import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;
    
    useEffect(() => {
        console.log('UseEffect with []'); 
        return () => {
            console.log('Clean up');
        }
    }, []);

    useEffect(() => { 
        console.log('UseEffect change formState', formState);
    }, [formState])
    
    useEffect(() => { 
        console.log('UseEffect change email', email);
    }, [email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
      <>
        <h1>UseEffect</h1>
        <hr />
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Ingresa tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="form-control mt-2"
            placeholder="Ingresa tu email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        { (name === '123') && <Message />}
      </>
    );
}
