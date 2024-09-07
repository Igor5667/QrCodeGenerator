interface InputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  className?: string;
}

function Input({ inputValue, setInputValue, className }: InputProps) {
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      type="text"
      placeholder="paste link here ..."
      className={`w-2/3 bg-transparent border-2 border-slate-400 rounded-full px-5 py-1 focus:outline-none text-lg ${className}`}
    />
  );
}

export default Input;
