import { FC } from "react";
import "./SocialMediaExpandedList.scss";





const SocialMediaExpandedList: FC = () => (
  <div
    className={`socialMediaExpandedList socialMediaExpandedList_mobile_expanded`}
  >
    <a
      target={"_blank"}
      href={"https://web.telegram.org/k/#/im?p=@infoV102ru"}
      className={"socialMediaExpandedList__item"}
    >
      <Telegram />
    </a>
    <a
      target={"_blank"}
      href={"https://vk.com/v102ru"}
      className={"socialMediaExpandedList__item"}
    >
      <VK />
    </a>
    <a
      target={"_blank"}
      href={"https://ok.ru/v102ru"}
      className={"socialMediaExpandedList__item"}
    >
      <Odnoklassniki />
    </a>
    <a
      target={"_blank"}
      href={"https://www.youtube.com/user/tvv102/videos"}
      className={
        "socialMediaExpandedList__item socialMediaExpandedList__item_expanding"
      }
    >
      <Youtube />
    </a>
    <a
      target={"_blank"}
      href={"https://dzen.ru/v102.ru"}
      className={
        "socialMediaExpandedList__item socialMediaExpandedList__item_expanding"
      }
    >
      <YandexZen />
    </a>
  </div>
);

export default SocialMediaExpandedList;
