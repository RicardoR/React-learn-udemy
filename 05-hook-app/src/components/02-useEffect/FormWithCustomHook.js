import React, {useEffect} from 'react';
import {useForm} from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

	useEffect(() => {
		console.log('User has changed the email');
	}, [email])

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
	}

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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
        <input
					type="password"
					name="password"
					className='form-control mt-2'
					placeholder='Ingresa tu contraseña'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
        />      
			</div>
			<button
				type='submit'
				className='btn btn-primary mt-2'>
				Submit
			</button>
    </form>
  );
};
