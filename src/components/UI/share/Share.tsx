import { FC, useEffect } from "react";
import "./Share.scss";
import { shareLinks } from "../../constants";
import ShareCard from "./shareCard";

interface ShareProps {
  isLastAside?: boolean;
  isBorderTop?: boolean;
  onPrint?: () => any;
}

const Share: FC<ShareProps> = ({
  isLastAside = true,
  isBorderTop = true,
  onPrint,
}) => {
  return (
    <div className={`share ${isBorderTop ? "share_border_top" : ""}`}>
      <span className={"share__text"}>Поделиться:</span>
      <div
        className={`share__cards ${isLastAside ? "share__cards_aside" : ""}`}
      >
        {shareLinks.map((props) => (
          <ShareCard {...props} onPrint={onPrint} />
        ))}
      </div>
    </div>
  );
};

export default Share;
