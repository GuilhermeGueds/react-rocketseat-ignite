import { useEffect } from "react";
import { Container } from "./style";

export function TransectionTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

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
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento de webSite</td>
            <td>10/02/2020</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>17/02/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
