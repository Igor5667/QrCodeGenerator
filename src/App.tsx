import { useState } from "react";
import Input from "./components/Input";
import ButtonGenerate from "./components/ButtonGenerate";
import QrBox from "./components/QrBox";
import Header from "./components/Header";
import MainBox from "./components/MainBox";
import { Alert } from "@material-tailwind/react";
import PhoneButtons from "./components/PhoneButtons";

function App() {
  const [qrImgUrl, setQrImgUrl] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>("");

  //getting qr code by setting src atribute of img
  const getQrCode = () => {
    let link = inputValue.trim();
    if (link.length < 1) return;
    setQrImgUrl(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`
    );
  };

  const downloadQrCode = async () => {
    try {
      const response = await fetch(qrImgUrl);
      if (!response.ok) {
        handleAlert("Conection error");
        throw new Error("Conection error");
      }
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "QR_code";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      handleAlert("Error while downloading QR code");
      console.error("Error while downloading QR code:", error);
    }
  };

  let alertInterval: number | undefined;
  const handleAlert = (text: string) => {
    setAlertText(text);
    setShowAlert(true);

    //if previous alert exists, clear it
    if (alertInterval) clearInterval(alertInterval);

    alertInterval = setInterval(() => {
      setShowAlert(false);
      clearInterval(alertInterval);
    }, 3000);
  };

  const openQrInNewTab = () => {
    window.open(qrImgUrl);
  };

  return (
    <div className="flex md:h-screen md:w-screen justify-center items-center bg-background-gradient">
      <MainBox>
        <Alert
          open={showAlert}
          className="absolute w-min whitespace-nowrap top-5"
          color="red"
        >
          {alertText}
        </Alert>
        <Header />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <ButtonGenerate onClick={getQrCode} />
        <QrBox
          qrImgUrl={qrImgUrl}
          downloadQrCode={downloadQrCode}
          openQrInNewTab={openQrInNewTab}
        />
        {qrImgUrl && (
          <PhoneButtons
            downloadQrCode={downloadQrCode}
            openQrInNewTab={openQrInNewTab}
            className="md:hidden"
          />
        )}
      </MainBox>
    </div>
  );
}

export default App;
