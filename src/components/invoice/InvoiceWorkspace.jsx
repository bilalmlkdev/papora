import React, { useState } from "react";
import HeaderBlock from "./pdf/HeaderBlock.jsx";
import PayBlock from "./pdf/PayBlock.jsx";
import ThanksBlock from "./pdf/ThanksBlock.jsx";
import TermsBlock from "./pdf/TermsBlock.jsx";
import ItemsBlock from "./pdf/ItemsBlock.jsx";
import TotalsBlock from "./pdf/TotalsBlock.jsx";
import BilledToBlock from "./pdf/BilledToBlock.jsx";
import InvoiceForm from "./editor/InvoiceForm.jsx";
import { useInvoiceDoc } from "./editor/useInvoiceDoc.js";
import SideNav from "../shell/SideNav.jsx";
import TopBar from "../shell/TopBar.jsx";
import { EditIcon } from "lucide-react";
import { ThemeProvider } from "./pdf/ThemeProvider.jsx";
import { normalizeTheme, getPdfTheme } from "./data/themePresets.js";

const InvoiceWorkspace = ({ onSelect }) => {
  const { invoiceData, logoImage, signatureImage } = useInvoiceDoc();

  // Create the data structures that your existing components expect
  const invoice = {
    invoiceNumber: invoiceData.invoiceNumber,
    serialNumber: invoiceData.serialNumber,
    issueDate: invoiceData.issueDate,
    dueDate: invoiceData.dueDate,
    currency: invoiceData.currency,
  };

  const details = {
    sender: {
      header: "From",
      name: invoiceData.billedBy.name,
      contact: invoiceData.billedBy.contact,
      address: invoiceData.billedBy.address,
    },
    receiver: {
      header: "To",
      name: invoiceData.billedTo.name,
      contact: invoiceData.billedTo.contact,
      address: invoiceData.billedTo.address,
    },
  };

  const product = {
    items: invoiceData.items,
    tax: invoiceData.tax,
    symbol: invoiceData.symbol,
  };

  // Transform payment data to match PayBlock expectations
  const payment = invoiceData.payment.map((item) => ({
    [item.label]: item.value,
  }));

  // Default logo fallback
  const defaultLogo =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3Mjg2Ij5MT0dPPC90ZXh0Pgo8L3N2Zz4K";

  const defaultSignature =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjNkI3Mjg2Ij5TaWduYXR1cmU8L3RleHQ+Cjwvc3ZnPgo=";
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const handleMenuToggle = () => {
  setIsMobileMenuOpen(true);
};

const handleMenuClose = () => {
  setIsMobileMenuOpen(false);
};
  return (
    <div className="flex flex-col w-full xl:h-screen bg-white xl:overflow-hidden pt-16">
      <TopBar
        onMenuToggle={handleMenuToggle}
        onMenuClose={handleMenuClose}
        isMenuOpen={isMobileMenuOpen}
      />
      <div className="flex flex-col md:flex-row w-full flex-1 overflow-hidden">
        <div className="hidden xl:block xl:w-[17%] flex-shrink-0">
          <SideNav active="invoice" onSelect={onSelect} />
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={handleMenuClose}
              style={{ top: "64px" }} // Start below navbar (navbar height is h-16 = 64px)
            />

            {/* Mobile SideNav */}
            <div
              className="fixed left-0 w-full bg-white z-50 md:hidden shadow-lg transform transition-transform duration-300 ease-in-out"
              style={{
                top: "64px", // Start below navbar
                height: "calc(100vh - 64px)", // Full height minus navbar
                position: "fixed", // Ensure it's fixed positioned
              }}
            >
              <div className="h-full overflow-y-auto">
                <SideNav active="invoice" onSelect={onSelect} />
              </div>
            </div>
          </>
        )}
        <div className="flex flex-col w-full xl:w-[83%] bg-white flex-1 xl:overflow-hidden">
          <div className="border-b border-neutral-100 h-12 w-full flex-shrink-0 px-8 flex justify-start items-center gap-2">
            <EditIcon className="text-neutral-600" size={14} />
            <h1 className="text-neutral-600 text-sm"> Invoice Editor</h1>
          </div>
          <div className="flex flex-col xl:flex-row w-full flex-1 xl:overflow-hidden">
            <div className="w-full xl:w-[45%] xl:overflow-y-auto">
              {/* Left Side - Invoice Editor */}
              <InvoiceForm />
            </div>

            {/* PDF Preview */}
            <div className="w-full xl:w-[55%] py-6 bg-neutral-50/50 xl:overflow-y-auto text-xs">
              <div className="bg-white shadow-lg max-w-[595px] mx-auto">
                <ThemeProvider theme={normalizeTheme(invoiceData.theme)}>
                  <div
                    className={`w-[595px] min-h-[842px] font-sans text-sm p-6 ${getPdfTheme(normalizeTheme(invoiceData.theme)).page}`}
                  >
                    <div className="pb-3">
                      <h1 className={`text-xl font-normal uppercase ${getPdfTheme(normalizeTheme(invoiceData.theme)).title}`}>
                        Invoice {invoice.invoiceNumber}
                      </h1>
                    </div>

                  {/* Enhanced Invoice Header with Custom Fields */}
                  <HeaderBlock
                    logo={logoImage || defaultLogo}
                    invoice={invoice}
                    customFields={invoiceData.customFields.basic}
                  />

                  <BilledToBlock
                    sender={details.sender}
                    receiver={details.receiver}
                    customFields={invoiceData.customFields}
                  />

                  <ItemsBlock product={product} />

                  <TotalsBlock product={product} />

                  <PayBlock
                    payment={payment}
                    signature={signatureImage || defaultSignature}
                    text={invoiceData.signatureText}
                  />

                  <TermsBlock
                    title={invoiceData.termsSection.title}
                    text={invoiceData.termsSection.text}
                  />

                  <ThanksBlock
                    title={invoiceData.thankyouSection.title}
                    text={invoiceData.thankyouSection.text}
                  />
                  </div>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceWorkspace;
