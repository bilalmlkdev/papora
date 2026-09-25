import React from "react";
import { useTheme } from "./useTheme.js";

const TermsBlock = ({ title, text }) => {
  const t = useTheme();

  if (!title && !text) return null;

  return (
    <div className={`w-full border-y border-dashed ${t.border} ${t.notesBg} px-4 py-3 mb-4`}>
      <h3 className={`font-medium text-xs mb-1 ${t.heading}`}>{title}</h3>
      <h3 className={`text-xs ${t.body}`}>{text}</h3>
    </div>
  );
};

export default TermsBlock;
