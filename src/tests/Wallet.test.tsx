import { screen } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testatndo cabeçalho', () => {
  it('Verificando elemntos no cabeçalho ', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const emailWallet = screen.getByTestId('email-field');
    const totalValue = screen.getByTestId('total-field');
    const currencyBRL = screen.getByTestId('header-currency-field');
    const totalExpensives = screen.getByRole('heading', { level: 4, name: 'Despesa Total:' });

    expect(emailWallet).toBeInTheDocument();
    expect(totalValue).toBeInTheDocument();
    expect(currencyBRL).toBeInTheDocument();
    expect(totalExpensives).toBeInTheDocument();
  });
  it('Verificando elemntos do walletform', async () => {
    const { store } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputValue = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const inputCurrency = screen.getByTestId('currency-input');
    const inputMethod = screen.getByTestId('method-input');
    const inputTag = screen.getByTestId('tag-input');
    const walletBtn = screen.getByText('Adicionar despesa');

    expect(inputCurrency).toBeInTheDocument();
    expect(store.getState().wallet.expenses.length).toBe(0);

    // expect(store.getState().wallet.currencies).toEqual([
    //   'USD', 'CAD', 'GBP',
    //   'ARS', 'BTC', 'LTC',
    //   'EUR', 'JPY', 'CHF',
    //   'AUD', 'CNY', 'ILS',
    //   'ETH', 'XRP', 'DOGE',
    // ]);
    await act(async () => {
      await userEvent.type(inputValue, '500');
      await userEvent.type(inputDescription, 'roupas');
      await userEvent.selectOptions(inputMethod, 'Dinheiro');
      await userEvent.selectOptions(inputTag, 'Alimentação');
      await userEvent.click(walletBtn);
    });
  });
  it('Verificando elemntos da table', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const descriptionRow = screen.getByRole('columnheader', { name: 'Descrição' });
    const tagRow = screen.getByRole('columnheader', { name: 'Tag' });
    const methodRow = screen.getByRole('columnheader', { name: 'Método de pagamento' });
    const valueRow = screen.getByRole('columnheader', { name: 'Valor' });
    const currencyRow = screen.getByRole('columnheader', { name: 'Moeda' });
    const askRow = screen.getByRole('columnheader', { name: 'Câmbio utilizado' });
    const convertedRow = screen.getByRole('columnheader', { name: 'Valor convertido' });
    const currencyConvertedRow = screen.getByRole('columnheader', { name: 'Moeda de conversão' });
    const butonsTableHeader = screen.getByRole('columnheader', { name: 'Editar/Excluir' });

    expect(descriptionRow).toBeVisible();
    expect(tagRow).toBeVisible();
    expect(methodRow).toBeVisible();
    expect(valueRow).toBeVisible();
    expect(currencyRow).toBeVisible();
    expect(convertedRow).toBeVisible();
    expect(currencyConvertedRow).toBeVisible();
    expect(askRow).toBeVisible();
    expect(butonsTableHeader).toBeVisible();
  });
});
