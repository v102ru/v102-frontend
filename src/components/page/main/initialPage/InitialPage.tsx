import { FC, useEffect, useMemo, useState } from "react";
import "./InitialPage.scss";
import Advertisement from "../../../UI/advertisement";
import FeedCard from "../../../UI/feedCard";
import Newsline from "../../../UI/newsline";
import Popular from "../../../UI/popular";
import FeedPreview from "../../../UI/feedPreview";
import Recommended from "../../../UI/recommended";
import CustomLink from "../../../UI/customLink";
import { getMainNews, getNewsLine } from "../../../../api/api";
import {
  TFilteredMainNewsArray,
  TGetMainNews,
  TMainNews,
  TNewsLine,
} from "../../../../types/api";
import { filterMainNews, filterNewsLine } from "../../../../utils";
import { SiteError, SiteLoader } from "../../../UI/SiteStates";

const InitialPage: FC = ({}) => {
  const [mainNews, setMainNews] = useState<
    TFilteredMainNewsArray | undefined
  >();
  const [newsLine, setNewsLine] = useState<TNewsLine | undefined>();
  const [federalNewsLine, setFederalNewsLine] = useState<TNewsLine>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Promise.all<[any, any, any]>([
      getMainNews(),
      getNewsLine(),
      getNewsLine("federal"),
    ])
      .then(([mainNewsRes, newsLineRes, federalNewsLineRes]) => {
        setMainNews(filterMainNews(mainNewsRes));
        setNewsLine(filterNewsLine(newsLineRes));
        setFederalNewsLine(filterNewsLine(federalNewsLineRes));
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <SiteLoader />;
  }

  if (isError) {
    return <SiteError />;
  }

  return (
    <section className={"initialPage"}>
      <section className={"initialPage_centered initialPage__content content"}>
        <Advertisement />
        <Advertisement />
        <Advertisement />
        <Advertisement />
        <FeedCard type={"full"} {...mainNews![0]} />
        <Newsline
          heading={"Лента новостей"}
          isTopHighLighted={true}
          feed={newsLine}
        />
        {mainNews!.map(
          (news, index) =>
            index < 7 && index !== 0 && <FeedCard type={"half"} {...news} />
        )}
        <Popular />
      </section>
      <section
        className={
          "initialPage_centered initialPage__additionalContent additionalContent"
        }
      >
        <aside className={"additionalContent__aside aside"}>
          <Newsline heading={"Федеральные"} feed={federalNewsLine} />
          <Advertisement />
          <Advertisement />
          <Advertisement />
        </aside>
        <section className={"additionalContent__newsFeed newsFeed"}>
          <Advertisement />
          <Advertisement />
          {mainNews!.map(
            (news, index) =>
              index >= 7 &&
              index < 11 && <FeedCard type={"half"} size={"medium"} {...news} />
          )}
          {mainNews![11] && <FeedCard type={"full"} {...mainNews![11]} />}
        </section>
      </section>
      <section className={"initialPage__feedPreview"}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <FeedPreview {...mainNews![12]} />
      </section>
      {/*<section*/}
      {/*  className={*/}
      {/*    "initialPage_centered initialPage__recommendedFeed recommendedFeed"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Recommended heading={"Экономика"} />*/}
      {/*</section>*/}
      <section
        className={"initialPage_centered initialPage__subContent subContent"}
      >
        <section className={"subContent__cardsList cardsList"}>
          <Advertisement />
          <Advertisement />
          <Advertisement />
          <Advertisement />
          {mainNews!.map(
            (news, index) =>
              index >= 13 &&
              index < 17 && (
                <FeedCard type={"half"} size={"big"} {...mainNews![index]} />
              )
          )}
          {mainNews![17] && <FeedCard type={"full"} {...mainNews![17]} />}
        </section>
      </section>
      {/*<section className={"initialPage__media"}>*/}
      {/*  <MediaPreview params={mockedMediaPreview} />*/}
      {/*</section>*/}
      {/*<section className={"initialPage_centered initialPage__ads"}>*/}
      {/*  <Terms />*/}
      {/*  <Terms />*/}
      {/*  <Terms />*/}
      {/*</section>*/}
    </section>
  );
};

export default InitialPage;
