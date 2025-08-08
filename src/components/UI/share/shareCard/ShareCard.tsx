import { FC } from "react";
import "./ShareCard.scss";
import { SocialLinks, TShareCard } from "../../../interface";








const LogoTypes: Record<SocialLinks, any> = {
  [SocialLinks.TELEGRAM]: Telegram,
  [SocialLinks.VK]: VK,
  [SocialLinks.FACEBOOK]: Facebook,
  [SocialLinks.OK]: OK,
  [SocialLinks.TWITTER]: Twitter,
  [SocialLinks.COPY_LINK]: CopyLink,
  [SocialLinks.PRINT]: Print,
};

const ShareCard: FC<TShareCard> = ({ type, href, onClick, onPrint }) => {
  const Logo = LogoTypes[type];

  return (
    <>
      <a
        onClick={type === SocialLinks.PRINT ? onPrint : onClick}
        target="_blank"
        href={href && `${href}${window.location.href}`}
        className={`shareCard shareCard_theme_${type}`}
      >
        <Logo />
      </a>
    </>
  );
};

export default ShareCard;
