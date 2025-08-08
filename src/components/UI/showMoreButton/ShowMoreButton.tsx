import { ButtonHTMLAttributes, FC } from "react";
import "./ShowMoreButton.scss";

const ShowMoreButton: FC<ButtonHTMLAttributes<any>> = (props) => {
  return (
    <button className={"showMoreButton"} {...props}>
      <span className={"showMoreButton__text"}>Показать ещё</span>
    </button>
  );
};

export default ShowMoreButton;
