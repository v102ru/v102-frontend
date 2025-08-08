import { FC } from "react";

import "./PopularCard.scss";
import CustomLink from "../../customLink";

interface PopularCardProps {
  id: string;
  heading: string;
  imgSrc?: string;
}

const PopularCard: FC<PopularCardProps> = ({ heading, imgSrc, id }) => {
  return (
    <CustomLink to={`/news/${id}`} className={"popularCard"}>
      <div className={"popularCard__image"}>
        {imgSrc ? (
          <img src={imgSrc} />
        ) : (
          <div className={"feedCard__mockedImg"}>
            <ImgMock />
          </div>
        )}
      </div>
      <span className={"popularCard__text"}>{heading}</span>
    </CustomLink>
  );
};

export default PopularCard;
