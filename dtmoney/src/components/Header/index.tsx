import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";
import { ModalScreen } from "./modal";
import { useState } from "react";

interface IHeaderProps {
  onOpenNewTransectionModal: () => void;
}

export function Header(props: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={props.onOpenNewTransectionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
