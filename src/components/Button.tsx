interface ButtonProps {
  children: any;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="w-1/4 bg-white text-black h-1/4 p-4 rounded-3xl border border-black hover:bg-gray-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
