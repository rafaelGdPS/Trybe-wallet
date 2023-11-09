import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Table() {
  const { wallet } = useSelector((globalState: GlobalStateType) => globalState);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
        wallet.expenses.map((expense) => {
          const totalValue = Number(expense.value)
          * Number(expense.exchangeRates[expense.currency].ask);
          const expenseValue = Number(expense.value);
          const askValue = Number(expense.exchangeRates[expense.currency].ask);
          return (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expenseValue.toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{askValue.toFixed(2)}</td>
              <td>{totalValue.toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button>Editar</button>
                {' '}
                /
                {' '}
                <button>Excluir</button>
              </td>
            </tr>
          );
        })
        }
      </tbody>
    </table>
  );
}

export default Table;
