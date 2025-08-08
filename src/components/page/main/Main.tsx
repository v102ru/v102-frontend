import { FC, useContext, useMemo } from "react";
import "./Main.scss";

import Header from "../../UI/header";
import Footer from "../../UI/footer";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./newsPage";
import InitialPage from "./initialPage";
import SectionPage from "../../UI/pageTemplates/sectionPage";
import Media from "./media";
import SpecProjects from "./specProjects";
import { SideMenuContext } from "../../../context/SideMenuContext";
import FeedInfo from "../../UI/feedInfo";
import Tag from "../../UI/tag";
const ArticleImage = "https://dummyimage.com/1200x600/cccccc/000000.png&text=Article";
const MockedVideo = "https://dummyimage.com/800x450/cccccc/000000.png&text=Video";
import FeedCard from "../../UI/feedCard";
import Quote from "../../UI/quote";
import Share from "../../UI/share";
import Video from "./video";
import Photo from "./photo";
import ScrollToTopButton from "../../UI/scrollToTopButton";
import { useMediaQuery } from "react-responsive";
import SmallArticle from "../../UI/pageTemplates/smallArticle";
import Privacy from "./privacy";
import Advertisement from "./advertisement";
import Terms from "./terms";

const Main: FC = ({}) => {
  const mockedTags = useMemo(
    () => ["Политика", "Расследования", "Происшествия", "Счастье во всем мире"],
    []
  );
  const {
    isSideMenuPoped,
    setSideMenuPoped,
    isTopMenuPoped,
    setTopMenuPoped,
    topMenuContent,
  } = useContext<any>(SideMenuContext);
  const isMobile = useMediaQuery({ minWidth: "320px", maxWidth: "1439px" });
  const mobileButtons = useMemo(
    () =>
      isMobile
        ? {
            right: "25px",
            top: "25px",
          }
        : {},
    [isMobile]
  );
  const asideWindow = useMemo(() => {
    return (
      <>
        <section
          onClick={setSideMenuPoped}
          className={`main__outside outside ${
            isSideMenuPoped ? "outside_poped" : ""
          }`}
        />
        <section
          className={`main__asideWindow ${
            isSideMenuPoped ? "asideWindow_poped" : ""
          } asideWindow`}
        >
          <div
            onClick={() => setSideMenuPoped(false)}
            className={"asideWindow__close"}
            style={{
              ...mobileButtons,
            }}
          >
            <Cross />
          </div>
          <section className={"asideWindow__content content"}>
            <section className={"content__header header"}>
              <div className={"header__contentWrapper contentWrapper"}>
                <div className={"contentWrapper__value value"}>
                  <h2 className={"value__heading"}>
                    Кировский и Советский районы Волгограда соединят новой
                    дорогой за 380 миллионов
                  </h2>
                  <div className={"value__stats"}>
                    <FeedInfo
                      views={23500}
                      type={"all"}
                      comments={123}
                      readingTime={23}
                      date={"14 ноября 2022"}
                    />
                  </div>
                  <div className={"value__tags tags"}>
                    {mockedTags.map((tag: string) => {
                      return <Tag name={tag} />;
                    })}
                  </div>
                </div>
              </div>
              <div className={"header__mainImage mainImage"}>
                <img src={ArticleImage} alt={"Картинка статьи"} />
              </div>
            </section>
            <section className={"content__article article"}>
              <section className={"article__section section"}>
                <p className={"section__heading"}>
                  В Москве во вторник, 30 ноября, ожидаются самые сильные осадки
                  за последние 69 лет. Их принесет в столицу генуэзский циклон
                  «Бенедикт». Об этом сообщил ведущий сотрудник центра погоды
                  «Фобос» Евгений Тишковец.
                </p>
                <p className={"section__text"}>
                  По данным столичных коммунальщиков, высота снежного покрова в
                  городе увеличится на 2 см. Кроме того, ожидается похолодание,
                  что может поспособствовать образованию гололедицы.
                </p>
              </section>
              <section className={"article__section section"}>
                <p className={"section__text"}>
                  По его словам, выпадет до 23 мм осадков, или 40% месячной
                  нормы, — два ведра воды на квадратный метр.
                </p>
                <p className={"section__text"}>
                  Синоптик отметил, что обложные дожди будут лить стеной и
                  сменятся во второй половине дня снегопадом с ухудшением
                  видимости до 900 м.
                </p>
                <p className={"section__text"}>
                  «Это будут самые сильные осадки за этот день за последние 69
                  лет. Рекорд дня пока принадлежит 1952 году (25,4 мм). Суточный
                  рекорд осадков для всего ноября — 41 мм», — приводят слова
                  специалиста «РИА Новости».{" "}
                </p>
                <div className={"section__video"}>
                  <img src={MockedVideo} alt={"Видео"} />
                </div>
              </section>
              <section className={"article__section section"}>
                <p className={"section__text"}>
                  Городские службы Москвы переведены в режим повышенной
                  готовности.
                </p>
                <p className={"section__text"}>
                  Москвичей просят по возможности оставаться дома, а на улице
                  быть предельно внимательными: не укрываться под деревьями и не
                  парковать вблизи них автомобили, управляя автотранспортом,
                  строго соблюдать скоростной режим и дистанцию.
                </p>
                <p className={"section__text"}>
                  Накануне главный специалист Московского метеобюро Татьяна
                  Позднякова рассказала, что на текущей неделе в Москве
                  ожидается неустойчивая погода с температурой выше нормы на 2–3
                  градуса. Во вторник будут дожди, в остальные дни — снег. Кроме
                  того, начиная со вторника, резко понизится атмосферное
                  давление.{" "}
                </p>
                <div className={"section__slider"}>
                  <FeedCard type={"sliderWithoutInfo"} heading={""} />
                </div>
              </section>
              <section className={"article__section section"}>
                <p className={"section__text"}>
                  Синоптик отметил, что обложные дожди будут лить стеной и
                  сменятся во второй половине дня снегопадом с ухудшением
                  видимости до 900 м.
                </p>
                <p className={"section__text"}>
                  «Это будут самые сильные осадки за этот день за последние 69
                  лет. Рекорд дня пока принадлежит 1952 году (25,4 мм). Суточный
                  рекорд осадков для всего ноября — 41 мм», — приводят слова
                  специалиста «РИА Новости».{" "}
                </p>
                <section className={"section__quote"}>
                  <Quote
                    text={
                      "По данным столичных коммунальщиков, высота снежного покрова в городе увеличится на 2 см. Кроме того, ожидается похолодание, что может поспособствовать образованию гололедицы."
                    }
                    author={"Татьяна Позднякова"}
                    authorsPost={"главный специалист Московского метеобюро"}
                  />
                </section>
              </section>
              <section className={"article__section section"}>
                <p className={"section__text"}>
                  По данным столичных коммунальщиков, высота снежного покрова в
                  городе увеличится на 2 см. Кроме того, ожидается похолодание,
                  что может поспособствовать образованию гололедицы.{" "}
                </p>
                <Share />
              </section>
            </section>
          </section>
        </section>
      </>
    );
  }, [mobileButtons, mockedTags, isSideMenuPoped, setSideMenuPoped]);

  const topMenu = useMemo(() => {
    return (
      <>
        <section
          onClick={() => setTopMenuPoped(false)}
          className={`main__outside outside ${
            isTopMenuPoped ? "outside_poped" : ""
          }`}
        />
        <section
          className={`main__topMenu ${
            isTopMenuPoped ? "topMenu_poped" : ""
          } topMenu`}
        >
          {topMenuContent}
        </section>
      </>
    );
  }, [isTopMenuPoped, setTopMenuPoped, topMenuContent]);

  return (
    <div className={"main"}>
      <Header />
      <main className={"main__content content"}>
        <Routes>
          <Route path={"/"} element={<InitialPage />} />
          <Route path={"/news"} element={<NewsPage />} />
          <Route
            path={"/news/:id"}
            element={<SmallArticle key={String(Math.random())} />}
          />
          <Route path={"/photo"} element={<Media type={"photo"} />} />
          <Route path={"/photo/:id"} element={<Photo />} />
          <Route path={"/video"} element={<Media type={"video"} />} />
          <Route path={"/video/:id"} element={<Video />} />
          <Route path={"/specialProjects"} element={<SpecProjects />} />
          <Route path={"/privacy"} element={<Privacy />} />
          <Route path={"/advertisement"} element={<Advertisement />} />
          <Route path={"/terms"} element={<Terms />} />

          <Route path={"/section/:alias"} element={<SectionPage />} />
        </Routes>
      </main>
      <Footer />

      <ScrollToTopButton />
      {asideWindow}
      {topMenu}
    </div>
  );
};

export default Main;
