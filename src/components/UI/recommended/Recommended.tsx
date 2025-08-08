import { CSSProperties, FC } from "react";
import "./Recommended.scss";
import FeedCard from "../feedCard";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";

interface RecommendedProps {
  heading: string;
  color?: "white" | "dark";
}

//#282C3B
const Recommended: FC<RecommendedProps> = ({ heading, color = "dark" }) => {
  const isMobile = useMediaQuery({ minWidth: "320px", maxWidth: "767px" });

  const indicatorStyles: CSSProperties = {
    background: "#B4B6BC",
    borderRadius: 2,
    width: 24,
    height: 2,
    display: "inline-block",
    margin: "0 8px",
  };

  return (
    <section className={`recommended recommended_color_${color}`}>
      <h2 className={`recommended__heading recommended__heading`}>{heading}</h2>
      <section className={"recommended__cards cards"}>
        {isMobile ? (
          <Carousel
            showIndicators={true}
            infiniteLoop={true}
            showStatus={false}
            swipeable={true}
            showThumbs={false}
            showArrows={false}
            autoPlay={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    style={{ ...indicatorStyles, background: "#282C3B" }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  style={indicatorStyles}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            <FeedCard
              type={"fullRegular"}
              heading={
                "Волгоградский «Ротор» потерпел третье поражение в сезоне в матче с «Велесом»Смотреть фотографии"
              }
            />
            <FeedCard
              type={"fullRegular"}
              heading={
                "Волгоградский «Ротор» потерпел третье поражение в сезоне в матче с «Велесом»Смотреть фотографии"
              }
            />
            <FeedCard
              type={"fullRegular"}
              heading={
                "Волгоградский «Ротор» потерпел третье поражение в сезоне в матче с «Велесом»Смотреть фотографии"
              }
            />
          </Carousel>
        ) : (
          <>
            <FeedCard
              type={"fullRegular"}
              heading={
                "Волгоградский «Ротор» потерпел третье поражение в сезоне в матче с «Велесом»Смотреть фотографии"
              }
            />
            <FeedCard
              type={"fullRegular"}
              heading={
                "Волгоградский «Ротор» потерпел третье поражение в сезоне в матче с «Велесом»Смотреть фотографии"
              }
            />
            <FeedCard
              type={"fullRegular"}
              heading={
                "Волгоградский «Ротор» потерпел третье поражение в сезоне в матче с «Велесом»Смотреть фотографии"
              }
            />
          </>
        )}
      </section>
    </section>
  );
};

export default Recommended;
