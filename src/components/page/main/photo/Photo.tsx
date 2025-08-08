import { CSSProperties, FC, useContext, useRef } from "react";
import "./Photo.scss";

const Mountains = "https://dummyimage.com/800x600/cccccc/000000.png&text=Photo";
import Share from "../../../UI/share";
import Recommended from "../../../UI/recommended";
import { SideMenuContext } from "../../../../context/SideMenuContext";

import { Carousel } from "react-responsive-carousel";


import { useMediaQuery } from "react-responsive";

const Photo: FC = ({}) => {
  const imagePreviewRef = useRef(null);
  const { setTopMenuPoped, setTopMenuContent } =
    useContext<any>(SideMenuContext);
  const isMobile = useMediaQuery({ minWidth: "320px", maxWidth: "767px" });

  const mobileButtons = isMobile
    ? {
        position: "absolute",
        top: "380px",
      }
    : ({} as any);

  const onImageClick = () => {
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
  };

  return (
    <section className={"photoPage"}>
      <section className={"photoPage__content content"}>
        <h2 className={"content__photosHeading"}>
          Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko
        </h2>
        <section className={"content__photosList photosList"}>
          <div onClick={onImageClick} className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
          <div className={"photosList__image"}>
            <img src={Mountains} />
          </div>
        </section>
        {!isMobile ? (
          <>
            <section className={"content__shareSection shareSection"}>
              <Share isLastAside={false} isBorderTop={false} />
            </section>
            <section className={"content__recommendedFeed recommendedFeed"}>
              <Recommended color={"white"} heading={"Смотрите также"} />
            </section>
          </>
        ) : null}
      </section>
      <section
        ref={imagePreviewRef}
        className={"photoPage__photoPreview photoPreview"}
      >
        <section className={"photoPreview__outside outside"} />
      </section>
    </section>
  );
};

export default Photo;
