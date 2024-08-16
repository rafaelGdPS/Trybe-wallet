import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Dispatch, GlobalStateType, ObjectValuesType } from '../types';
import { fecthWallet, addExpensives } from '../redux/actions';

const INITIAL_VALUE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
} as ObjectValuesType;

function WalletForm() {
  const data = useSelector((globalState: GlobalStateType) => globalState.wallet);
  const dispatch: Dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<ObjectValuesType>(INITIAL_VALUE);
  const [editBtn, setEditBtn] = useState(false);

  useEffect(() => {
    dispatch(fecthWallet());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputValue(() => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addExpensives(inputValue));
    setInputValue(() => ({
      ...INITIAL_VALUE,
      id: inputValue.id + 1,
    }));
  };
  // const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
  //   const { id } = e.target
  // }

  return (
    <>
      <form
        action=""
        onSubmit={ handleSubmit }
      >
        <label htmlFor="value">
          <input
            type="text"
            name="value"
            id="value"
            value={ inputValue.value }
            onChange={ handleChange }
            data-testid="value-input"
            placeholder="Valor"
          />
        </label>
        <label htmlFor="description">
          <input
            type="text"
            name="description"
            id="description"
            value={ inputValue.description }
            onChange={ handleChange }
            data-testid="description-input"
            placeholder="Descrição"
          />
        </label>
        <label htmlFor="currency-input">
          <select
            data-testid="currency-input"
            onChange={ handleChange }
            name="currency"
            id="currencies"
          >
            {data.currencies.map((currency) => {
              return <option key={ currency } value={ currency }>{currency}</option>;
            })}
          </select>
        </label>
        <label htmlFor="method">
          <select
            name="method"
            id="method"
            data-testid="method-input"
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select name="tag" id="tag" data-testid="tag-input" onChange={ handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        {editBtn ? <button type="submit">Editar despesa</button>
          : <button type="submit">Adicionar despesa</button>}
      </form>
      <div />
    </>
  );
}

export default WalletForm;
