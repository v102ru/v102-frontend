import { FC } from "react";
import "./Loader.scss";

export const Loader: FC = () => {
  return (
    <ul role="progressbar" aria-busy="true" aria-label="Loading domino shop">
      <li role="presentation" />
      <li role="presentation" />
      <li role="presentation" />
      <li role="presentation" />
      <li role="presentation" />
      <li role="presentation" />
      <li role="presentation" />
    </ul>
  );
};
