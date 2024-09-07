import { FaArrowDown } from "react-icons/fa6";

interface ButtonGenerateProps {
  onClick: () => void;
}

function ButtonGenerate({ onClick }: ButtonGenerateProps) {
  return (
    <button
      onClick={onClick}
      className="border py-2 px-10 rounded-2xl bg-white text-black flex items-center gap-3"
    >
      GENERATE
      <FaArrowDown />
    </button>
  );
}

export default ButtonGenerate;
