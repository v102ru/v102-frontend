import { FC } from "react";
import {
  HtmlToArrayTypes,
  PlainHtmlToArrayContentSolo,
} from "../../../../utils";
import { Carousel } from "react-responsive-carousel";


import { useMediaQuery } from "react-responsive";

type TProps = PlainHtmlToArrayContentSolo;

export const ContentPart: FC<TProps> = ({ type, content }) => {
  const isMobile = useMediaQuery({ minWidth: "320px", maxWidth: "767px" });

  if (type === HtmlToArrayTypes.MULTIPLE_IMAGES) {
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2,
                top: "calc(50% - 15px)",
                width: isMobile ? "36px" : "48px",
                height: isMobile ? "36px" : "48px",
                cursor: "pointer",
                backgroundColor: "rgba(62, 66, 79, 0.75)",
                border: 0,
                borderRadius: "8px",
                right: isMobile ? "16px" : "12px",
              }}
            >
              <RightArrow
                width={isMobile ? 24 : 36}
                height={isMobile ? 24 : 36}
              />
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 2,
                top: "calc(50% - 15px)",
                width: isMobile ? "36px" : "48px",
                height: isMobile ? "36px" : "48px",
                cursor: "pointer",
                backgroundColor: "rgba(62, 66, 79, 0.75)",
                border: 0,
                borderRadius: "8px",
                left: isMobile ? "16px" : "12px",
              }}
            >
              <LeftArrow
                width={isMobile ? 16 : 36}
                height={isMobile ? 16 : 36}
              />
            </button>
          )
        }
      >
        {(content as string[]).map((img: string) => (
          <p
            className={"text__subtext"}
            dangerouslySetInnerHTML={{ __html: img }}
          />
        ))}
      </Carousel>
    );
  }

  return (
    <div
      className={"text__subtext"}
      dangerouslySetInnerHTML={{ __html: content as string }}
    />
  );
};
