import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const { user, wallet } = useSelector((globalState: GlobalStateType) => globalState);

  console.log(wallet);
  const values = wallet.expenses.map((expense) => ({
    value: Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask),
    // ask: expense.exchangeRates[expense.currency].ask,
    // code: expense.exchangeRates[expense.currency].code,
    // name: expense.exchangeRates[expense.currency].name,
  }));

  const totalValue = values.reduce((acc, curr) => {
    console.log(typeof curr.value);
    console.log(acc);

    const total = acc + curr.value;
    return total;
  }, 0);
  // console.log(justNumber);

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
