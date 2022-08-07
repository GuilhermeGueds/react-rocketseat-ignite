import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import { closeImg, incomeImg, outcomeImg } from "../../assets";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestModalClose: () => void;
}

export function NewTransectionModal({
  isOpen,
  onRequestModalClose,
}: INewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestModalClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestModalClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Titulo" />

        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
