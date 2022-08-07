import Modal from "react-modal";
import { Container } from "./styles";

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
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Titulo" />

        <input placeholder="Valor" type="number" />

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
