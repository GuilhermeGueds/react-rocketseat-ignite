import { Container } from "./style";
import { incomeImg, outcomeImg, totalImg } from "../../assets/";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p> Entrada</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p> Saida</p>
          <img src={outcomeImg} alt="Saida" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>

      <div className="hoghlight-background">
        <header>
          <p> Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
