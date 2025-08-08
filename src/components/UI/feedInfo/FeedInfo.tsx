import { FC } from "react";
import "./FeedInfo.scss";




import { getNounMinutes } from "../../../utils";

interface FeedInfoProps {
  views?: number;
  readingTime?: number;
  comments?: number;
  date?: string;
  type: "viewsOnly" | "withoutDate" | "all";
}

const FeedInfo: FC<FeedInfoProps> = ({
  readingTime,
  views,
  comments,
  type,
  date,
}) => {
  const readTime = getNounMinutes(readingTime || 1);

  switch (type) {
    case "viewsOnly":
      return null;
    // <div className={"feedInfo"}>
    //   <div className={"feedInfo__section section"}>
    //     <div className={"section__item item"}>
    //       <div className={`item__logo`}>
    //         <Views />
    //       </div>
    //       <span className={`item__text`}>{views}</span>
    //     </div>
    //   </div>
    // </div>
    case "withoutDate":
      return (
        <div className={"feedInfo"}>
          <div className={"feedInfo__section"}>
            <div className={"section__item item"}>
              <div className={`item__logo`}>
                <Time />
              </div>
              <span className={`item__text`}>{readTime}</span>
            </div>
          </div>
          {/*<div className={"feedInfo__section"}>*/}
          {/*  <div className={"section__item item"}>*/}
          {/*    <div className={`item__logo`}>*/}
          {/*      <Views />*/}
          {/*    </div>*/}
          {/*    <span className={`item__text`}>{views}</span>*/}
          {/*  </div>*/}
          {/*  /!*<div className={"section__item item"}>*!/*/}
          {/*  /!*  <div className={`item__logo`}>*!/*/}
          {/*  /!*    <Comments />*!/*/}
          {/*  /!*  </div>*!/*/}
          {/*  /!*  <span className={`item__text`}>{comments}</span>*!/*/}
          {/*  /!*</div>*!/*/}
          {/*</div>*/}
        </div>
      );
    case "all":
      return (
        <div className={"feedInfo feedInfo_all"}>
          <div className={"feedInfo__section"}>
            <div className={"section__item item"}>
              <div className={`item__logo`}>
                <Date />
              </div>
              <span className={`item__text`}>{date}</span>
            </div>
          </div>
          <div className={"feedInfo__section"}>
            <div className={"section__item item"}>
              <div className={`item__logo`}>
                <Time />
              </div>
              <span className={`item__text`}>{readTime}</span>
            </div>
            {/*<div className={"section__item item"}>*/}
            {/*  <div className={`item__logo`}>*/}
            {/*    <Views />*/}
            {/*  </div>*/}
            {/*  <span className={`item__text`}>{views}</span>*/}
            {/*</div>*/}
            {/*<div className={"section__item item"}>*/}
            {/*  <div className={`item__logo`}>*/}
            {/*    <Comments />*/}
            {/*  </div>*/}
            {/*  <span className={`item__text`}>{comments}</span>*/}
            {/*</div>*/}
          </div>
        </div>
      );
  }
};

export default FeedInfo;
