import { FC } from "react";
import {
  HtmlToArrayTypes,
  PlainHtmlToArrayContent,
  splitArrayToChunks,
} from "../../../../utils";
import FeedCard from "../../feedCard";
import { ContentPart } from "./ContentPart";

type TTemplateContent = {
  items: PlainHtmlToArrayContent;
  readAlso?: string;
};

const CHUNKS = 12;

export const TemplateContent: FC<TTemplateContent> = ({ items }) => {
  const itemsChunks = splitArrayToChunks(items, CHUNKS);

  return (
    <>
      {itemsChunks.map((text: any) => (
        <>
          <section className={"article_centered article__text text"}>
            {text[0] && <ContentPart {...text[0]} />}
            {text[1] && <ContentPart {...text[1]} />}
          </section>
          {text[2] ? (
            <section className={"article__text"}>
              {text[2] && <ContentPart {...text[2]} />}
              {text[3] && <ContentPart {...text[3]} />}
              {text[4] && <ContentPart {...text[4]} />}
            </section>
          ) : null}
          {text[5] ? (
            <section className={"article_centered article__text text"}>
              {text[5] && <ContentPart {...text[5]} />}
              {/*<div className={"text__image"}>*/}
              {/*  <img src={MockedVideo} alt={"Видео"} />*/}
              {/*</div>*/}
            </section>
          ) : null}
          <section className={"article_centered article__text text"}>
            {text[6] && <ContentPart {...text[6]} />}
            {text[7] && <ContentPart {...text[7]} />}
            {text[8] && <ContentPart {...text[8]} />}
            {/*<div className={"text__sliderCard"}>*/}
            {/*  /!* TODO *!/*/}
            {/*  <FeedCard type={"sliderWithoutInfo"} heading={""} />*/}
            {/*</div>*/}
          </section>
          <section className={"article_centered article__text text"}>
            {text[9] && <ContentPart {...text[9]} />}
            {text[10] && <ContentPart {...text[10]} />}
            {/*<Quote*/}
            {/*  text={*/}
            {/*    "По данным столичных коммунальщиков, высота снежного покрова в городе увеличится на 2 см. Кроме того, ожидается похолодание, что может поспособствовать образованию гололедицы."*/}
            {/*  }*/}
            {/*  author={"Татьяна Позднякова"}*/}
            {/*  authorsPost={"главный специалист Московского метеобюро"}*/}
            {/*/>*/}
          </section>
          <section className={"article_centered article__text text"}>
            {text[11] && <ContentPart {...text[11]} />}
          </section>
        </>
      ))}
    </>
  );
};
