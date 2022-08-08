import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransectionModal } from "./components/NewTransectionsModal";
import { TransactionContext, TransactionProvider } from "./TransactionsContext";

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
    <TransactionProvider>
      <Header onOpenNewTransectionModal={handleOpenNewModal} />
      <Dashboard />

      <NewTransectionModal
        isOpen={isNewTransactionModalOpen}
        onRequestModalClose={handleCloseNewModal}
      />
      <GlobalStyles />
    </TransactionProvider>
  );
}
