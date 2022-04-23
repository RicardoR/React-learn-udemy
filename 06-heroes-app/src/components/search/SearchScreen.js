import React from 'react';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {
  const [formValues, handleInputChange] = useForm({ searchText: '' });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Search screen </h1>
      <hr />

      <div className="row">
        <div className="col-6">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar heroe"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary mt-2">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

// const initialForm = {
//   name: '',
//   age: 0,
//   email: '',
// };

// const [values, handleInputChange, reset] = useForm(initialForm);
