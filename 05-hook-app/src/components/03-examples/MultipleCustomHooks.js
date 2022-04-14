import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './multiple-custom.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer"> {author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente frase
      </button>
    </>
  );
};
