import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const { user, wallet } = useSelector((globalState: GlobalStateType) => globalState);

  console.log(wallet);
  const values = wallet.expenses.map((expense) => ({
    value: Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask),
  }));

  const totalValue = values.reduce((acc, curr) => {
    const total = acc + curr.value;
    return total;
  }, 0);

  return (
    <header>
      <h4 data-testid="email-field">{ user.email }</h4>
      <h4>Despesa Total:</h4>
      <h4 data-testid="total-field">{totalValue.toFixed(2)}</h4>
      <h4 data-testid="header-currency-field">BRL</h4>
    </header>
  );
}

export default Header;
