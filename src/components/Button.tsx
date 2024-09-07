interface ButtonProps {
  children: any;
  onClick: () => void;
  className?: string;
}

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`w-1/4 bg-white text-black h-1/4 p-4 rounded-3xl border border-black hover:bg-gray-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
