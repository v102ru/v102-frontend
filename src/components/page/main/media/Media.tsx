import { FC } from "react";
import "./Media.scss";
import AllTags from "../../../UI/allTags";
import FeedCard from "../../../UI/feedCard";

interface MediaProps {
  type: "photo" | "video";
}

const Media: FC<MediaProps> = ({ type }) => {
  const heading = type === "photo" ? "Фото" : "Видео";
  return (
    <section className={"media"}>
      <section className={"media__content content"}>
        <header className={"content__header header"}>
          <h2 className={"header__name"}>{heading}</h2>
          <AllTags />
        </header>
        <section className={"content__cards cards"}>
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
          <FeedCard
            type={type}
            heading={
              "Бренд-шеф проектов Джейми Оливера для своих блюд использует Nemoloko"
            }
          />
        </section>
      </section>
    </section>
  );
};

export default Media;
