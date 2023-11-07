import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const data = useSelector((globalState: GlobalStateType) => globalState.user);

  console.log(data);

  return (
    <header>
      <h4 data-testid="email-field">{ data.email }</h4>
      <h4>Despesa Total: R$ 0,00 BRL</h4>
      <h4 data-testid="total-field">0</h4>
      <h4 data-testid="header-currency-field">BRL</h4>
    </header>
  );
}

export default Header;
