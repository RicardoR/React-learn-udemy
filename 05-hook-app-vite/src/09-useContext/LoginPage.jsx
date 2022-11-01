import {useContext} from "react";
import {UserContext} from "./context/UserContext";

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);

    const loginUser = () => {
        const user = {
            id: 123,
            name: 'Ricardo',
            mail: 'ricardo@mail'
        }
        setUser(user);
    }

    return (
        <>
            <h1> LoginPage</h1>
            <hr/>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button
                onClick={loginUser}
                className='btn btn-primary'>
                Set user
            </button>
        </>
    );
};

