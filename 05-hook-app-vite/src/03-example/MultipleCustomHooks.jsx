import {useCounter, useFetch} from "../hooks";
import {LoadingQuote, Quote} from "./";


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1> breaking bad Quotes</h1>
            <hr/>

            {
                isLoading
                    ? <LoadingQuote></LoadingQuote>
                    : <Quote quote={quote} author={author}></Quote>
            }

            <button className='btn btn-primary'
                    disabled={isLoading}
                    onClick={() => increment()}>
                Next quote
            </button>
        </>
    );
};



