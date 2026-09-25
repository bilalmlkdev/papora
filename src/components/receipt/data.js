export const defaultReceiptData = {
  receiptNumber: "RCPT-0001",
  receiptDate: new Date().toISOString().slice(0, 10),
  currency: "USD",
  symbol: "$",
  theme: "light",
  billedBy: {
    name: "Bilal Malik",
    contact: "bilalmlkdev@gmail.com",
    address: "Pakistan",
  },
  billedTo: {
    name: "Your Client",
    contact: "client@example.com",
    address: "Client address",
  },
  items: [
    { name: "Service", description: "Consulting", qty: 1, price: 100.0 },
  ],
  tax: 0,
  receivedAmount: 100.0,
  payment: [
    { label: "Payment Method", value: "Bank transfer" },
    { label: "Transaction Id", value: "TXN-123456" },
  ],
  termsSection: { title: "Notes", text: "Payment received in full." },
  thankyouSection: { title: "Thank you!", text: "We appreciate your payment." },
  signatureText: "Authorized Signature",
  customFields: { basic: [], company: [], client: [] },
};

