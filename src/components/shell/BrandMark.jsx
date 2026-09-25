import { useNavigate } from "react-router-dom";
import logo from '../../assets/signature.png'

const BrandMark = ({ className = "h-12 w-auto" }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      aria-label="Papora home"
      className={`cursor-pointer select-none ${className}`}
    >
      <img src={logo} className="h-full" />
    </button>
  );
};

export default BrandMark;
