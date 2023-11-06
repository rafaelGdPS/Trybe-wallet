import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserData } from '../redux/actions';
import { Dispatch } from '../types';

const initialValue = {
  email: '',
  password: '',
};

function Login() {
  const [inputValue, setInputValue] = useState(initialValue);
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();
  console.log(inputValue);

  const { email, password } = inputValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue(() => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUserData(inputValue.email));
    navigate('/carteira');
  };

  const emailValidate = !/\S+@\S+\.\S+/.test(inputValue.email);
  const passwordValidate = inputValue.password.length < 6;
  const validate = emailValidate || passwordValidate;

  return (
    <form onSubmit={ handleSubmit }>
      <h3>Login</h3>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          onChange={ handleChange }
          value={ email }
          placeholder="Email"
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          onChange={ handleChange }
          value={ password }
          placeholder="Password"
          data-testid="password-input"
        />
      </label>
      <button type="submit" disabled={ validate }>Entrar</button>
    </form>
  );
}

export default Login;
