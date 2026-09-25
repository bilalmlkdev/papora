import { useContext } from "react";
import { ReceiptContext } from "./receiptState.js";

export const useReceiptDoc = () => {
  const context = useContext(ReceiptContext);
  if (!context) {
    throw new Error("useReceiptDoc must be used within a ReceiptProvider");
  }
  return context;
};
