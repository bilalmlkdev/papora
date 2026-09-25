import React from "react";
import { InvoiceProvider } from "../components/invoice/editor/InvoiceProvider.jsx";
import InvoiceWorkspace from "../components/invoice/InvoiceWorkspace.jsx";
import { ReceiptProvider } from "../components/receipt";
import ReceiptWorkspace from "../components/receipt/ReceiptWorkspace.jsx";

export default function WorkspacePage({ activeView, onSelect }) {
  return activeView === "invoice" ? (
    <InvoiceProvider>
      <InvoiceWorkspace onSelect={onSelect} />
    </InvoiceProvider>
  ) : (
    <ReceiptProvider>
      <ReceiptWorkspace onSelect={onSelect} />
    </ReceiptProvider>
  );
}
