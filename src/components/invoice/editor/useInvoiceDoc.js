import { useContext } from "react";
import { InvoiceContext } from "./invoiceState.js";

export const useInvoiceDoc = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useInvoiceDoc must be used within an InvoiceProvider");
  }
  return context;
};
