import { FC } from "react";
import ErrorIcon from "../../../../icons/error.svg?react";
import "./Error.scss";

const Error: FC = () => (
  <div className="errorWrapper">
    <ErrorIcon className={"errorWrapper__icon"} />
    <h2 className="errorWrapper__header">Произошла непредвиденная ошибка</h2>
    <p className="errorWrapper__description">
      Попробуйте, пожалуйста, еще раз позже
    </p>
  </div>
);

export default Error;
