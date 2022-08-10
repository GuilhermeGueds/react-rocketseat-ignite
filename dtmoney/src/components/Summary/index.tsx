import { Container } from "./style";
import { incomeImg, outcomeImg, totalImg } from "../../assets/";
import { useTransactions } from "../../hooks/UseTransactionsContext";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
      }
      acc.total = acc.deposit - acc.withdraws;
      return acc;
    },
    {
      deposit: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p> Entrada</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposit)}
        </strong>
      </div>

      <div>
        <header>
          <p> Saida</p>
          <img src={outcomeImg} alt="Saida" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="hoghlight-background">
        <header>
          <p> Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          R${" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
