import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type UserDataType = {
  email: string,
};

export type UserDataActionType = {
  type: string,
  payload: {
    email: UserDataType
  }
};

export type CurrencyType = {
  code: string,
  codein:string,
  name: string,
  high: string,
  low: string,
  varBid: string,
  pctChange: string,
  bid: string,
  ask: string,
  timestamp: string,
  create_date: string
};

export type ObjectValuesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
};

export type ObjectTypeWallet = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: {
    [coin: string]: {
      code: string,
      name: string,
      ask: string,
    }
  }
};

export type WalletDataType = {
  currencies: string[],
  expenses: ObjectTypeWallet[],
  // editor: boolean,
  // idToEdit: number,
  // isFetching: boolean
};

export type WalletDataActionType = {
  type: string,
  payload: {
    currencies: string[],
    expenses: []
  }
};

export type GlobalStateType = {
  user: UserDataType
  wallet: WalletDataType
};

export type Dispatch = ThunkDispatch<UserDataType, null, AnyAction>;
