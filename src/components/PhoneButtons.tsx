import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";

interface PhoneButtonsProps {
  downloadQrCode: () => void;
  openQrInNewTab: () => void;
  className?: string;
}

function PhoneButtons(props: PhoneButtonsProps) {
  const { downloadQrCode, openQrInNewTab, className } = props;

  return (
    <div className={`flex justify-center gap-4 w-full text-2xl ${className}`}>
      <Button
        onClick={openQrInNewTab}
        className="flex items-center justify-center py-5"
      >
        <IoMdOpen />
      </Button>
      <Button
        onClick={downloadQrCode}
        className="flex items-center justify-center py-5"
      >
        <MdOutlineFileDownload />
      </Button>
    </div>
  );
}

export default PhoneButtons;
