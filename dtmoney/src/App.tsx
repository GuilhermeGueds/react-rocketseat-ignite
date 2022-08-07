import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransectionModal={handleOpenNewModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewModal}
      >
        <>Cadastrar transação</>
      </Modal>
      <GlobalStyles />
    </>
  );
}
