import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { IoMdOpen } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import Button from "./components/Button";

function App() {
  const [qrImgUrl, setQrImgUrl] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const getQrCode = () => {
    let link = inputValue.trim();
    if (link.length < 1) return;
    setQrImgUrl(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`
    );
  };

  const downloadQrCode = async () => {
    console.log("pobieram");
    try {
      const response = await fetch(qrImgUrl);
      if (!response.ok) throw new Error("Błąd sieci");
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qrCode";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Błąd podczas pobierania obrazka:", error);
    }
  };

  const openQrInNewTab = () => {
    window.open(qrImgUrl);
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-background-gradient">
      <div className="w-2/3 h-[90%] flex flex-col items-center gap-5 bg-background-card-gradient text-white border border-slate-400 rounded-3xl py-10 shadow-xl">
        <h1 className="text-3xl mb-6 w-[90%] text-center">
          Let's make some QR Codes!
        </h1>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="paste link here ..."
          className="w-2/3 bg-transparent border-2 border-slate-400 rounded-full px-5 py-1 focus:outline-none text-lg"
        />
        <button
          onClick={getQrCode}
          className="border py-2 px-10 rounded-2xl bg-white text-black flex items-center gap-3"
        >
          GENERATE
          <FaArrowDown />
        </button>
        <div className="qr-box flex-1 aspect-square border rounded-2xl p-5 mt-5 relative overflow-hidden">
          {qrImgUrl && (
            <>
              <img src={qrImgUrl} alt="qrCode" width="100%" />
              <div className="download-card flex items-center justify-center gap-5">
                <Button onClick={downloadQrCode}>
                  <MdOutlineFileDownload className="w-full h-full" />
                </Button>
                <Button onClick={openQrInNewTab}>
                  <IoMdOpen className="w-full h-full" />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
