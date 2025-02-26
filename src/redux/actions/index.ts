import { Dispatch, ObjectTypeWallet, ObjectValuesType } from '../../types';
import { getApi } from '../../utils/utils';

export const UPDATE_USER_DATA = 'UPDATE_USER_DATA ';
export const REQUEST_FETCH = 'REQUEST_FETCH';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const REQUEST_EXPENSIVES = 'REQUEST_EXPENSIVES';
export const ERROR_EXPENSIVES = 'ERROR_EXPENSIVES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';

export const updateUserData = (email : string) => ({
  type: UPDATE_USER_DATA,
  payload: {
    email,
  },
});

export const requestFetch = () => ({
  type: REQUEST_FETCH,
});

export const fetchCurrencies = (currencies: string[]) => ({
  type: FETCH_CURRENCIES,
  payload: currencies,
});

export const fetchExpenses = (expenses: ObjectTypeWallet) => ({
  type: FETCH_EXPENSES,
  payload: expenses,
});

export const fetchError = () => ({
  type: FETCH_ERROR,
});

export const deleteExpenses = (expenses: ObjectTypeWallet[]) => ({
  type: DELETE_EXPENSES,
  payload: expenses,
});

export const editExpenses = (id: number) => ({
  type: EDIT_EXPENSES,
});

export const fecthWallet = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestFetch());
      const data = await getApi();
      const allCurrencies = Object.keys(data);

      const currencies = allCurrencies.filter((currency: string) => currency !== 'USDT');
      dispatch(fetchCurrencies(currencies));
      console.log(currencies);
    } catch (error) {
      dispatch(fetchError());
    }
  };
};

export const addExpensives = (expenses: ObjectValuesType) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestFetch());
      const data = await getApi();

      const allObjectExpenses = {
        ...expenses,
        exchangeRates: data,

      };

      dispatch(fetchExpenses(allObjectExpenses));
    } catch (error) {
      dispatch(fetchError());
    }
  };
};
