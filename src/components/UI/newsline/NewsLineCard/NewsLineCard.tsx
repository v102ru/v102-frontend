import { FC } from "react";
import "./NewsLineCard.scss";
import CustomLink from "../../customLink";

type TNewsLineCard = {
  createdAt: string;
  name: string;
  link: string;
  isArticlesPage?: boolean;
};

const NewsLineCard: FC<TNewsLineCard> = ({
  createdAt,
  name,
  link,
  isArticlesPage,
}) => (
  <div className={"newsLineCard"}>
    <span className={"newsLineCard__createdAt"}>{createdAt}</span>
    <CustomLink
      to={link}
      reloadDocument={isArticlesPage}
      className={"newsLineCard__text"}
    >
      {name}
    </CustomLink>
  </div>
);

export default NewsLineCard;
