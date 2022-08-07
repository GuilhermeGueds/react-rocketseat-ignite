import Modal from "react-modal";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestModalClose: () => void;
}

export function NewTransectionModal({
  isOpen,
  onRequestModalClose,
}: INewTransactionModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestModalClose}>
        <>Cadastrar transação</>
      </Modal>
    </>
  );
}
