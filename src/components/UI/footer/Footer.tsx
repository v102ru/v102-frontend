import { FC } from "react";
import "./Footer.scss";








import CustomLink from "../customLink";

const Footer: FC = ({}) => {
  return (
    <footer className={"mainFooter"}>
      <div className={"mainFooter__content content"}>
        <section className={"content__logo logo"}>
          <Logo />
        </section>
        <section className={"content__ads ads"}>
          <span className={"ads__heading"}>Редакция</span>
          <CustomLink
            to="/advertisement"
            className={"ads__item ads__item_highlighted"}
          >
            Реклама на сайте
          </CustomLink>
          <CustomLink to={"/privacy"} className={"ads__item"}>
            Политика конфиденциальности
          </CustomLink>
          <CustomLink to={"/terms"} className={"ads__item"}>
            Правила использования, перепечатки и цитирования материалов
          </CustomLink>
          {/*<CustomLink to={"/legal"} className={"ads__item"}>*/}
          {/*  Правовая информация*/}
          {/*</CustomLink>*/}
        </section>
        <section className={"content__contact contact"}>
          <span className={"contact__heading"}>Связаться с нами</span>
          <span className={"contact__item"}>info@v102.ru</span>
          <span className={"contact__item"}>(8442) 78-19-76</span>
          <span className={"contact__item"}>+7 937 55-66-102</span>
        </section>
        <section className={"content__social social"}>
          <div className={"social__info info"}>
            <span className={"info__heading"}>Мы в соцсетях</span>
            <div className={"info__links links"}>
              <CustomLink
                to={"https://web.telegram.org/k/#/im?p=@infoV102ru"}
                target="_blank"
                className={"links__item"}
              >
                <Telegram />
              </CustomLink>
              <CustomLink
                to={"https://vk.com/v102ru"}
                target="_blank"
                className={"links__item"}
              >
                <VK />
              </CustomLink>
              <CustomLink
                to={"https://ok.ru/v102ru"}
                target="_blank"
                className={"links__item"}
              >
                <Odnoklassniki />
              </CustomLink>
              <CustomLink
                to={"https://www.youtube.com/user/tvv102/videos"}
                target="_blank"
                className={"links__item"}
              >
                <Youtube />
              </CustomLink>
              <CustomLink
                to={"https://dzen.ru/v102.ru"}
                target="_blank"
                className={"links__item"}
              >
                <YandexZen />
              </CustomLink>
            </div>
          </div>
          <div className={"social__copyright copyright"}>
            <div className={"copyright__logo"}>
              <AgeProtected />
            </div>
            <span className={"copyright__text"}>
              2006-2021 ООО “СВЖ”ОСТРОВ”
            </span>
            <span className={"copyright__founders"}>
              Главный редактор ИА "Высота 102" Соколова Евгения Александровна
            </span>
            <span className={"copyright__founders"}>
              Учредитель ИА "Высота 102" - ООО "СВЖ "ОСТРОВ"
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
