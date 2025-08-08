import { FC, useContext, useMemo } from "react";

import "./FeedCard.scss";
import FeedInfo from "../feedInfo";


import MediaAmount from "../mediaAmount";
import CustomLink from "../customLink";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";
import { NewsCategoriesContext } from "../../../context/NewsCategoriesContext";

interface FeedCardProps {
  type:
    | "full"
    | "fullWithoutImage"
    | "fullRegular"
    | "half"
    | "video"
    | "photo"
    | "slider"
    | "sliderWithoutInfo"
    | "fullSpecProjects"
    | "articleExtra";
  size?: "big" | "medium" | "small";
  onClick?: () => void;
  centerMode?: boolean;
  heading?: string;
  imgSrc?: string;
  readTime?: number;
  views?: number;
  id?: string;
  id_menu?: string;
}

const FeedCard: FC<FeedCardProps> = ({
  type,
  heading,
  size = "small",
  onClick,
  centerMode,
  imgSrc,
  readTime,
  views,
  id,
  id_menu,
}) => {
  const categories = useContext(NewsCategoriesContext);
  const currentCategory = categories
    ? categories.find((category) => category.id === Number(id_menu))
    : null;
  const isMobile = useMediaQuery({ minWidth: "320px", maxWidth: "767px" });
  const img = useMemo(
    () =>
      imgSrc ? (
        <img src={imgSrc} />
      ) : (
        <div className={"feedCard__mockedImg"}>
          <ImgMock />
        </div>
      ),
    [imgSrc]
  );

  switch (type) {
    case "full":
      return (
        <CustomLink to={`/news/${id}`} className={"feedCard fullFeedCard"}>
          <div className={"fullFeedCard__image"}>{img}</div>
          <div className={"fullFeedCard__content content"}>
            <span className={"content__category"}>
              {currentCategory?.title}
            </span>
            <h2 className={"content__heading"}>{heading}</h2>
            <FeedInfo
              type={"withoutDate"}
              readingTime={readTime}
              views={views || 1}
              comments={128}
            />
          </div>
        </CustomLink>
      );
    case "fullSpecProjects":
      return (
        <CustomLink
          to={`/news/${id}`}
          onClick={onClick}
          className={"feedCard fullFeedCard fullSpecProjects"}
        >
          <div className={"fullFeedCard__image"}>{img}</div>
          <div className={"fullFeedCard__content content"}>
            <span className={"content__category"}>
              {currentCategory?.title}
            </span>
            <h2 className={"content__heading"}>{heading}</h2>
            <FeedInfo
              type={"withoutDate"}
              readingTime={readTime}
              views={views || 1}
              comments={128}
            />
          </div>
        </CustomLink>
      );
    case "fullRegular":
      return (
        <CustomLink
          to={`/news/${id}`}
          className={"feedCard fullFeedCard fullRegularCard"}
        >
          <div className={"fullFeedCard__image"}>{img}</div>
          <div className={"fullFeedCard__content content"}>
            <span className={"content__category"}>
              {currentCategory?.title}
            </span>
            <h2 className={"content__heading"}>{heading}</h2>
            <FeedInfo
              type={"withoutDate"}
              readingTime={readTime}
              views={views || 1}
              comments={128}
            />
          </div>
        </CustomLink>
      );
    case "fullWithoutImage":
      return (
        <CustomLink to={`/news/${id}`} className={"feedCard fullFeedCard"}>
          <div className={"fullFeedCard__content content"}>
            <span className={"content__category"}>
              {currentCategory?.title}
            </span>
            <h2 className={"content__heading"}>{heading}</h2>
            <FeedInfo
              type={"withoutDate"}
              readingTime={readTime}
              views={views || 1}
              comments={128}
            />
          </div>
        </CustomLink>
      );
    case "half":
      return (
        <CustomLink
          to={`/news/${id}`}
          className={`feedCard halfFeedCard halfFeedCard_${size}`}
        >
          <div className={"halfFeedCard__image"}>{img}</div>
          <div className={"halfFeedCard__content content"}>
            <span className={"content__category"}>
              {currentCategory?.title}
            </span>
            <h2 className={"content__heading"}>{heading}</h2>
            <FeedInfo
              type={"withoutDate"}
              readingTime={readTime}
              views={views || 1}
              comments={128}
            />
          </div>
        </CustomLink>
      );
    case "articleExtra":
      return (
        <CustomLink
          to={`/news/${id}`}
          className={`feedCard articleExtraCard articleExtraCard_${size}`}
        >
          <div className={"articleExtraCard__image"}>{img}</div>
          <div className={"articleExtraCard__content content"}>
            <span className={"content__category"}>
              {currentCategory?.title}
            </span>
            <h2 className={"content__heading"}>{heading}</h2>
            <FeedInfo
              type={"withoutDate"}
              readingTime={readTime}
              views={views || 1}
              comments={128}
            />
          </div>
          <div className={"articleExtraCard__background"} />
        </CustomLink>
      );
    case "video":
      return (
        <CustomLink
          to={`/news/${id}`}
          className={`feedCard videoFeedCard videoFeedCard_${size}`}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.75)), " +
              'url("https://img.freepik.com/free-vector/japanese-style-asian-decorative-background-design_1017-31213.jpg?size=626&ext=jpg&ga=GA1.2.1353532548.1636934400")',
          }}
        >
          <div className={"videoFeedCard__logo logo"}>
            <MediaAmount type={"video"} amount={13} />
          </div>
          <div className={"videoFeedCard__content content"}>
            <span className={"content__category"}>
              {currentCategory?.title}
            </span>
            <h2 className={"content__heading content__heading_big"}>
              {heading}
            </h2>
            <FeedInfo
              type={"viewsOnly"}
              readingTime={readTime}
              views={views || 1}
              comments={128}
            />
          </div>
        </CustomLink>
      );
    case "photo":
      return (
        <CustomLink
          to={`/news/${id}`}
          className={`feedCard photoFeedCard photoFeedCard_${size}`}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.75)), " +
              "url(https://wallpaperaccess.com/full/138728.jpg)",
          }}
        >
          <div className={"photoFeedCard__logo logo"}>
            <MediaAmount type={"photo"} amount={13} />
          </div>
          <div className={"photoFeedCard__content content"}>
            <span className={"content__category"}>
              {currentCategory?.title}
            </span>
            <h2 className={"content__heading content__heading_big"}>
              {heading}
            </h2>
            <FeedInfo
              type={"viewsOnly"}
              readingTime={readTime}
              views={views || 1}
              comments={128}
            />
          </div>
        </CustomLink>
      );
    case "slider":
      return (
        <Carousel
          showIndicators={false}
          infiniteLoop={true}
          showStatus={false}
          swipeable={true}
          showThumbs={false}
          showArrows={true}
          autoPlay={false}
          dynamicHeight={true}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "calc(50% - 15px)",
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: 0,
                  right: 10,
                }}
              >
                <RightArrow />
              </button>
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "calc(50% - 15px)",
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: 0,
                  left: 10,
                }}
              >
                <LeftArrow />
              </button>
            )
          }
        >
          <div className={"sliderFeedCard feedCard fullFeedCard"}>
            <div className={"fullFeedCard__image"}>{img}</div>
            <div className={"fullFeedCard__content content"}>
              <h2 className={"content__heading"}>{heading}</h2>
              <FeedInfo
                type={"withoutDate"}
                readingTime={readTime}
                views={views || 1}
                comments={128}
              />
            </div>
          </div>
          <div className={"sliderFeedCard feedCard fullFeedCard"}>
            <div className={"fullFeedCard__image"}>{img}</div>
            <div className={"fullFeedCard__content content"}>
              <h2 className={"content__heading"}>{heading}</h2>
              <FeedInfo
                type={"withoutDate"}
                readingTime={readTime}
                views={views || 1}
                comments={128}
              />
            </div>
          </div>
          <div className={"sliderFeedCard feedCard fullFeedCard"}>
            <div className={"fullFeedCard__image"}>{img}</div>
            <div className={"fullFeedCard__content content"}>
              <h2 className={"content__heading"}>{heading}</h2>
              <FeedInfo
                type={"withoutDate"}
                readingTime={readTime}
                views={views || 1}
                comments={128}
              />
            </div>
          </div>
        </Carousel>
      );
    case "sliderWithoutInfo":
      return (
        <Carousel
          showIndicators={false}
          infiniteLoop={true}
          showStatus={false}
          swipeable={true}
          showThumbs={false}
          showArrows={true}
          autoPlay={false}
          dynamicHeight={false}
          centerMode={centerMode}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className={"sliderFeedCard__slideButton"}
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 2,
                  top: "calc(50% - 15px)",
                  width: isMobile ? "36px" : "48px",
                  height: isMobile ? "36px" : "48px",
                  cursor: "pointer",
                  backgroundColor: "rgba(62, 66, 79, 0.5)",
                  border: 0,
                  borderRadius: "8px",
                  right: centerMode ? "12%" : "8px",
                }}
              >
                <RightArrow />
              </button>
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                className={"sliderFeedCard__slideButton"}
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 2,
                  top: "calc(50% - 15px)",
                  width: isMobile ? "36px" : "48px",
                  height: isMobile ? "36px" : "48px",
                  cursor: "pointer",
                  backgroundColor: "rgba(62, 66, 79, 0.5)",
                  border: 0,
                  borderRadius: "8px",
                  left: centerMode ? "12%" : "8px",
                }}
              >
                <LeftArrow />
              </button>
            )
          }
        >
          <div className={"sliderFeedCard feedCard fullFeedCard"}>
            <div className={"fullFeedCard__image"}>{img}</div>
          </div>
          <div className={"sliderFeedCard feedCard fullFeedCard"}>
            <div className={"fullFeedCard__image"}>{img}</div>
          </div>
          <div className={"sliderFeedCard feedCard fullFeedCard"}>
            <div className={"fullFeedCard__image"}>{img}</div>
          </div>
        </Carousel>
      );
  }
};

export default FeedCard;
