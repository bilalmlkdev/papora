import { useNavigate } from "react-router-dom";

const Logo = ({ className = "h-12 w-auto" }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      aria-label="Papora home"
      className={`cursor-pointer transition-opacity hover:opacity-90 select-none ${className}`}
    >
      <svg viewBox="0 0 148 40" className="h-full w-auto" fill="none" role="img">
        <rect x="2" y="4" width="32" height="32" rx="9" fill="#0a0a0a" />
        <path
          d="M11 11h9.5L25 15.5V29a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2z"
          fill="#ffffff"
        />
        <path d="M20.5 11v4.5H25" fill="#c4c4c4" />
        <path
          d="M14.5 20h7M14.5 24h7M14.5 27.5h4.5"
          stroke="#0a0a0a"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <text
          x="43"
          y="28.5"
          fontSize="23"
          fontWeight="700"
          letterSpacing="-0.5"
          fill="currentColor"
          fontFamily="inherit"
        >
          Papora
        </text>
      </svg>
    </button>
  );
};

export default Logo;
