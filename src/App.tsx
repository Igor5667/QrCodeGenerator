import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { IoMdOpen } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import Button from "./components/Button";
import Input from "./components/Input";
import ButtonGenerate from "./components/ButtonGenerate";
import QrBox from "./components/QrBox";
import Header from "./components/Header";
import MainBox from "./components/MainBox";

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
      link.download = "QR_code";
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
      <MainBox>
        <Header />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <ButtonGenerate onClick={getQrCode} />
        <QrBox
          qrImgUrl={qrImgUrl}
          downloadQrCode={downloadQrCode}
          openQrInNewTab={openQrInNewTab}
        />
      </MainBox>
    </div>
  );
}

export default App;
