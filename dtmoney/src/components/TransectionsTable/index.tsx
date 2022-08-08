import { useContext } from "react";
import { Container } from "./style";
import { TransactionContext } from "../../TransactionsContext";

export function TransactionsTable() {
  const transaction = useContext(TransactionContext);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="title">Tíulo</th>
            <th>Valor</th>
            <th>Transação</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transaction.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
