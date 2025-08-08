import { FC } from "react";
import "./newsPage.scss";
import Advertisement from "../../../UI/advertisement";
import FeedCard from "../../../UI/feedCard";
import Recommended from "../../../UI/recommended";
import ShowMoreButton from "../../../UI/showMoreButton";
import { useMediaQuery } from "react-responsive";

const NewsPage: FC = ({}) => {
  const isMobile = useMediaQuery({ minWidth: "320px", maxWidth: "1439px" });

  return (
    <section className={"newsPage newsPage_centered"}>
      <h1 className={"newsPage__heading"}>Новости</h1>
      <section className={"newsPage__news news"}>
        <Advertisement />
        <Advertisement />
        <Advertisement />
        <Advertisement />
        <Advertisement />
        <Advertisement />
        <Advertisement />
        <Advertisement />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
        <FeedCard
          type={"half"}
          size={"small"}
          heading={"«Ростелеком» откроет студентам цифровой мир"}
        />
      </section>
      {/*<section className={"newsPage__recommendedFeed recommendedFeed"}>*/}
      {/*  <Recommended heading={"Рекомендуемое"} />*/}
      {/*</section>*/}
      <section className={"newsPage__additionalNews additionalNews"}>
        {isMobile ? (
          <>
            <Advertisement />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <ShowMoreButton />
          </>
        ) : (
          <>
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <ShowMoreButton />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
            <FeedCard
              type={"half"}
              size={"small"}
              heading={"«Ростелеком» откроет студентам цифровой мир"}
            />
          </>
        )}
      </section>
    </section>
  );
};

export default NewsPage;
