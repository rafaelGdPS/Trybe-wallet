import { AnyAction } from 'redux';
import { DELETE_EXPENSES,
  EDIT_EXPENSES,
  FETCH_CURRENCIES, FETCH_ERROR, FETCH_EXPENSES, REQUEST_FETCH } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_FETCH: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FETCH_CURRENCIES: {
      return {
        ...state,
        currencies: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case FETCH_EXPENSES: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case DELETE_EXPENSES: {
      return {
        ...state,
        expenses: action.payload,
      };
    }
    case EDIT_EXPENSES: {
      return {
        ...state,

      };
    }
    default:
      return state;
  }
};

export default wallet;
