import { FC, useRef } from "react";
import Category from "../../category";
import FeedInfo from "../../feedInfo";
import { calculateReadingTime, plainHtmlToArray } from "../../../../utils";
import { TemplateContent } from "./TemplateContent";
import Share from "../../share";
import Advertisement from "../../advertisement";
import Newsline from "../../newsline";
import { useReactToPrint } from "react-to-print";
import DOMPurify from "dompurify";

/* eslint-disable @typescript-eslint/naming-convention */
type TContent = {
  newsItem: any;
  categories: any;
  childArticleRefs: any;
  index: number;
  newsLine: any;
  isMobile: any;
};
export const Content: FC<TContent> = ({
  newsItem,
  categories,
  childArticleRefs,
  index,
  newsLine,
  isMobile,
}) => {
  const printRef = useRef(null);
  const {
    heading,
    imgSrc,
    id,
    id_menu,
    date_pub_ins,
    views,
    text: newsText,
  } = newsItem;
  const currentCategory = categories?.find(
    (category: any) => category.id === Number(id_menu)
  );
  const sanitizedText = DOMPurify.sanitize(newsItem.text, { ADD_TAGS: ["iframe"] });
  const textItems = plainHtmlToArray(sanitizedText);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <section
      ref={(el: HTMLElement) => (childArticleRefs.current[index] = el)}
      data-id={id}
      key={id}
      className={"smallArticle"}
    >
      <section className={"smallArticle__content"}>
        <section className={"smallArticle__mainPart mainPart"}>
          <section
            ref={printRef}
            className={"mainPart__mainContent mainContent"}
          >
            <Category {...currentCategory} />
            <h2 className={"mainContent__heading"}>{heading}</h2>
            <div className={"mainContent__stats"}>
              <FeedInfo
                views={views}
                type={"all"}
                comments={123}
                readingTime={calculateReadingTime(newsText)}
                date={date_pub_ins}
              />
            </div>
            <div className={"mainContent__mainImage"}>
              <img src={imgSrc} alt={"Картинка статьи"} />
            </div>
            <section className={"mainContent__article article"}>
              <TemplateContent items={textItems} />
              <Share onPrint={handlePrint} />
            </section>
            <section className={"smallArticle__ads ads"}>
              <Advertisement />
              <Advertisement />
            </section>
          </section>
          <aside className={"mainPart__aside aside"}>
            <Advertisement />
            <Advertisement />
            <Advertisement />
            {!isMobile && index === 0 && (
              <Newsline
                heading={"Лента новостей"}
                isArticlesPage
                feed={newsLine}
              />
            )}
            <Advertisement />
            <Advertisement />
            <Advertisement />
          </aside>
        </section>
        {/*<section*/}
        {/*  className={*/}
        {/*    "smallArticle__recommendedArticles recommendedArticles"*/}
        {/*  }*/}
        {/*>*/}
        {/*  /!*<Recommended heading={"Читайте также"} />*!/*/}
        {/*</section>*/}
      </section>
    </section>
  );
};
