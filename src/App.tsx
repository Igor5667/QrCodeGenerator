import { useState } from "react";

function App() {
  const [qrImg, setQrImg] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const getQrCode = () => {
    let qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    setQrImg(qr);
  };

  return (
    <div className="text-red-600">
      <h1>Lets get some QrCode</h1>
      <button onClick={getQrCode}>Click</button>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="paste link"
      />
      {qrImg && <img src={qrImg} alt="qrCode" />}
    </div>
  );
}

export default App;
