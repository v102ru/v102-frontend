import { FC } from "react";
import "./FeedPreview.scss";
import FeedCard from "../feedCard";
import CustomLink from "../customLink";

type Props = {
  id: string;
  imgSrc?: string;
};
const FeedPreview: FC<Props> = ({ imgSrc, id, ...rest }) => {
  return (
    <CustomLink
      to={`/news/${id}}`}
      className={"feedPreview"}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className={"feedPreview__card card"}>
        <FeedCard type={"fullWithoutImage"} {...rest} />
      </div>
    </CustomLink>
  );
};

export default FeedPreview;
