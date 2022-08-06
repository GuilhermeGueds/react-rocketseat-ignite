import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); //3 colunas 1 tamanho flexivel entre elas

  gap: 2rem; //  espaçamento entre cada um dos grides
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    font-weight: normal;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    //E a div que tem essa clasee hoghlight-background
    &.hoghlight-background {
      background: var(--green);
      color: #ffff;
    }
  }
`;
