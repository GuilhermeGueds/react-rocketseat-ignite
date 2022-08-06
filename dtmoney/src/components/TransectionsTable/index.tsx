import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransectionTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
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
