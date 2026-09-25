import React from 'react'
import SectionFold from "../../shared/SectionFold.jsx";

const ClosingNoteEditor = ({
  openSections,
  toggleSection,
  toggleEdit,
  invoiceData,
  labelClass,
  updateThankyouSection,
  inputClass,
}) => {
  return (
    <SectionFold
      title="Thank-you note"
      isOpen={openSections.thanks}
      onToggle={() => toggleSection("thanks")}
      showEditIcon={true}
      onEdit={() => toggleEdit("thanks")}
    >
      <div className="space-y-4 mt-4">
        <div>
          <label className={labelClass}>Section Title</label>
          <input
            type="text"
            value={invoiceData.thankyouSection.title}
            onChange={(e) => updateThankyouSection("title", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Thank You Message</label>
          <textarea
            value={invoiceData.thankyouSection.text}
            onChange={(e) => updateThankyouSection("text", e.target.value)}
            className={inputClass}
            rows="3"
          />
        </div>
      </div>
    </SectionFold>
  );
};

export default ClosingNoteEditor