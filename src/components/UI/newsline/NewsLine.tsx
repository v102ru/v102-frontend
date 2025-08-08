import { FC } from "react";
import "./NewsLine.scss";
import NewsLineCard from "./NewsLineCard";
import { TNewsLine } from "../../../types/api";

interface NewsLineProps {
  heading: string;
  isTopHighLighted?: boolean;
  feed?: TNewsLine;
  isArticlesPage?: boolean;
}

const NewsLine: FC<NewsLineProps> = ({
  heading,
  isTopHighLighted = false,
  feed,
  isArticlesPage = false,
}) => {
  return (
    <aside
      className={`newsline ${
        isTopHighLighted ? "newsline_topHighlighted" : ""
      }`}
    >
      <section className={"newsline__content content"}>
        <h2 className={"content__heading"}>{heading}</h2>
        <div className={"content__news"}>
          {feed
            ? feed.map((newsCard) => (
                <NewsLineCard
                  createdAt={newsCard.date_pub_ins}
                  name={newsCard.title}
                  link={`/news/${newsCard.id}`}
                  isArticlesPage={isArticlesPage}
                />
              ))
            : []}
        </div>
      </section>
    </aside>
  );
};

export default NewsLine;
