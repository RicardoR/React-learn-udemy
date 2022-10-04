import {useEffect} from 'react';
import {useState} from 'react';
import {Message} from "./Message.jsx";

export const SimpleForm = () => {
    const existingUser = 'ricardo2';
    const [formState, setFormState] = useState({
        username: 'ricardo',
        email: 'email@mail.com',
    });

    const {username, email} = formState;
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        console.log('Email was changed!');
    }, [email]);

    useEffect(() => {
        console.log('Username was changed!');
    }, [username]);

    useEffect(() => {
        console.log('Component was mounted!');
    }, []);

    return (
        <>
            <h1>Simple form</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === existingUser) && <Message/>
            }

        </>
    );
};
