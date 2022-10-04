import {useEffect} from "react";

export const Message = () => {

    useEffect(() => {
        console.log('Message mounted')
        return () => {
            console.log('Message unMounted')
        };
    }, []);

    return (
        <>
            <h3 className={'mt-2'}>User already exists</h3>
        </>
    );
};

