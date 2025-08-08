import { FC } from "react";
import LoaderIcon from "../../loader";
import "./Loader.scss";

const Loader: FC = () => (
  <div className="loaderWrapper">
    <LoaderIcon />
  </div>
);

export default Loader;
