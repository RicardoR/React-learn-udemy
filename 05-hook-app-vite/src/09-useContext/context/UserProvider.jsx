import {UserContext} from "./UserContext";

const user = {
    id: 123,
    name: 'Ricardo',
    email: 'ricardo@mail'
}

export const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
};

