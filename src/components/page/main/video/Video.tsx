import { FC, useContext, useMemo, useRef } from "react";
import "./Video.scss";
import { Carousel } from "react-responsive-carousel";


import Share from "../../../UI/share";
import Recommended from "../../../UI/recommended";
import { useMediaQuery } from "react-responsive";
import { SideMenuContext } from "../../../../context/SideMenuContext";

const Video: FC = ({}) => {
  const isMobile = useMediaQuery({ minWidth: "320px", maxWidth: "767px" });
  const { setTopMenuPoped, setTopMenuContent } =
    useContext<any>(SideMenuContext);
  const mobileButtons = useMemo(
    () =>
      isMobile
        ? {
            position: "absolute",
            top: "380px",
          }
        : ({} as any),
    [isMobile]
  );

  const onVideoClick = useMemo(
    () => () => {
      setTopMenuContent(
        <>
          <div
            onClick={() => setTopMenuPoped(false)}
            className={"topMenu__close"}
            style={{
              ...mobileButtons,
            }}
          >
            <Cross />
          </div>
          <section className={"topMenu__photoSlider"}>
            <Carousel
              showIndicators={false}
              infiniteLoop={true}
              showStatus={false}
              swipeable={true}
              showThumbs={false}
              showArrows={true}
              autoPlay={false}
              dynamicHeight={true}
              centerMode={!isMobile}
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
                      width: "48px",
                      height: "48px",
                      cursor: "pointer",
                      backgroundColor: "rgba(62, 66, 79, 0.75)",
                      border: 0,
                      borderRadius: "8px",
                      right: isMobile ? "16px" : "12%",
                      ...mobileButtons,
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
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 2,
                      top: "calc(50% - 15px)",
                      width: "48px",
                      height: "48px",
                      cursor: "pointer",
                      backgroundColor: "rgba(62, 66, 79, 0.75)",
                      border: 0,
                      borderRadius: "8px",
                      left: isMobile ? "16px" : "12%",
                      ...mobileButtons,
                    }}
                  >
                    <LeftArrow />
                  </button>
                )
              }
            >
              <section
                style={{ backgroundColor: "green" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
              <section
                style={{ backgroundColor: "orange" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
              <section
                style={{ backgroundColor: "yellow" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
              <section
                style={{ backgroundColor: "green" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
              <section
                style={{ backgroundColor: "orange" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
              <section
                style={{ backgroundColor: "yellow" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
              <section
                style={{ backgroundColor: "green" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
              <section
                style={{ backgroundColor: "orange" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
              <section
                style={{ backgroundColor: "yellow" }}
                className={"videoPage__video"}
              >
                <h2>123123</h2>
              </section>
            </Carousel>
          </section>
        </>
      );
      setTopMenuPoped(true);
    },
    [isMobile, mobileButtons, setTopMenuContent, setTopMenuPoped]
  );

  const mockedVideosFromAPI = useMemo(
    () => [
      "Video",
      "Video",
      "Video",
      "Video",
      "Video",
      "Video",
      "Video",
      "Video",
      "Video",
      "Video",
    ],
    []
  );

  const Videos = useMemo(() => {
    if (!isMobile) {
      return (
        <section className={"videoPage__videoSlider videoSlider"}>
          <Carousel
            showIndicators={false}
            infiniteLoop={true}
            showStatus={false}
            swipeable={true}
            showThumbs={false}
            showArrows={true}
            autoPlay={false}
            dynamicHeight={true}
            centerMode={!isMobile}
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
                    width: "48px",
                    height: "48px",
                    cursor: "pointer",
                    backgroundColor: "rgba(62, 66, 79, 0.25)",
                    border: 0,
                    borderRadius: "8px",
                    right: isMobile ? "16px" : "12%",
                    ...mobileButtons,
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2,
                    top: "calc(50% - 15px)",
                    width: "48px",
                    height: "48px",
                    cursor: "pointer",
                    backgroundColor: "rgba(62, 66, 79, 0.25)",
                    border: 0,
                    borderRadius: "8px",
                    left: isMobile ? "16px" : "12%",
                    ...mobileButtons,
                  }}
                >
                  <LeftArrow />
                </button>
              )
            }
          >
            <section
              style={{ backgroundColor: "green" }}
              className={"videoPage__video"}
            >
              <h2>123123</h2>
            </section>
            <section
              style={{ backgroundColor: "orange" }}
              className={"videoPage__video"}
            >
              <h2>123123</h2>
            </section>
            <section
              style={{ backgroundColor: "yellow" }}
              className={"videoPage__video"}
            >
              <h2>123123</h2>
            </section>
            <section
              style={{ backgroundColor: "green" }}
              className={"videoPage__video"}
            >
              <h2>123123</h2>
            </section>
            <section
              style={{ backgroundColor: "orange" }}
              className={"videoPage__video"}
            >
              <h2>123123</h2>
            </section>
          </Carousel>
        </section>
      );
    }

    return (
      <section className={"videoPage__videoSlider videoSlider"}>
        {mockedVideosFromAPI.map((video) => {
          return (
            <section
              onClick={onVideoClick}
              style={{
                backgroundColor:
                  "rgb(" +
                  Math.random() * 256 +
                  "," +
                  Math.random() * 256 +
                  "," +
                  Math.random() * 256 +
                  ")",
              }}
              className={"videoPage__video"}
            >
              <h2>{video}</h2>
            </section>
          );
        })}
      </section>
    );
  }, [isMobile, mockedVideosFromAPI, mobileButtons, onVideoClick]);

  return (
    <section className={"videoPage"}>
      <h2 className={"videoPage__heading"}>
        Волгоградским газовикам пригрозили миллионным штрафом за отказ от прямых
        договоров
      </h2>
      {Videos}
      {!isMobile && (
        <section className={"videoPage__content content"}>
          <section className={"content__shareSection shareSection"}>
            <Share isLastAside={false} isBorderTop={false} />
          </section>
          <section className={"content__recommendedFeed recommendedFeed"}>
            <Recommended color={"white"} heading={"Смотрите также"} />
          </section>
        </section>
      )}
    </section>
  );
};

export default Video;
