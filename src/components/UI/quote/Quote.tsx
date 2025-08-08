import { FC } from "react";
import "./Quote.scss";

interface QuoteProps {
  text: string;
  author: string;
  authorsPost?: string;
}

const Quote: FC<QuoteProps> = ({ text, author, authorsPost }) => {
  return (
    <div className={"quote"}>
      <div className={"quote__logo"}>
        <QuoteLogo />
      </div>
      <div className={"quote__info info"}>
        <span className={"info__text"}>{text}</span>
        <div className={"info__author author"}>
          <span className={"author__name"}>{author}</span>
          <span className={"author__post"}>{authorsPost}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
