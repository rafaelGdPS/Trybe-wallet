import { screen } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando elementos do login', () => {
  const email = 'test@test.com';
  const testIdEmail = 'email-input';
  const testIdPassword = 'password-input';
  it('Testando elementos existentes', () => {
    renderWithRouterAndRedux(<App />);
    const titleLogin = screen.getByRole('heading', { level: 3, name: 'Login' });
    const inputEmail = screen.getByTestId(testIdEmail);
    const inputPassword = screen.getByTestId(testIdPassword);
    const loginBtn = screen.getByRole('button', { name: 'Entrar' });

    expect(titleLogin).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });
  it('Testando funcionalidades dos elementos', async () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(testIdEmail);
    const inputPassword = screen.getByTestId(testIdPassword);
    const loginBtn = screen.getByRole('button', { name: 'Entrar' });

    await act(async () => {
      await userEvent.type(inputEmail, email);
      await userEvent.type(inputPassword, '123456');
      await userEvent.click(loginBtn);
    });

    const titleWallet = screen.getByRole('heading', { level: 4, name: 'Despesa Total:' });
    expect(titleWallet).toBeInTheDocument();
  });
  it('verifica os dados na store', async () => {
    const INITIAL_STATE = {
      user: {
        email: '',
      },
      wallet: {
        currencies: [],
        expenses: [],
      },
    };
    const { store } = renderWithRouterAndRedux(<App />);

    expect(store.getState()).toEqual(INITIAL_STATE);

    const inputEmail = screen.getByTestId(testIdEmail);
    const inputPassword = screen.getByTestId(testIdPassword);
    const loginBtn = screen.getByRole('button', { name: 'Entrar' });
    expect(loginBtn).toBeDisabled();

    await act(async () => {
      await userEvent.type(inputEmail, email);
      await userEvent.type(inputPassword, '123456');
      await userEvent.click(loginBtn);
    });
    expect(loginBtn).toBeEnabled();
    expect(store.getState().user).toEqual({ email });
  });
});
