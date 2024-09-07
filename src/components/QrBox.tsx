import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";

interface QrBoxProps {
  qrImgUrl: string;
  downloadQrCode: () => void;
  openQrInNewTab: () => void;
}

function QrBox({ qrImgUrl, downloadQrCode, openQrInNewTab }: QrBoxProps) {
  return (
    <div
      className="w-[90%] mt-10 qr-box md:flex-1 aspect-square border rounded-2xl p-5 md:mt-5
     relative overflow-hidden"
    >
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
  );
}

export default QrBox;
