import { FC } from "react";
import "./MediaAmount.scss";


interface MediaAmountProps {
  type: "video" | "photo";
  amount: number;
}

const logoTypes = {
  video: Video,
  photo: Photo,
};

const MediaAmount: FC<MediaAmountProps> = ({ type, amount }) => {
  const Logo = logoTypes[type];
  return (
    <div className={"mediaAmount"}>
      <Logo />
      <span className={"mediaAmount__value"}>{amount}</span>
    </div>
  );
};

export default MediaAmount;
