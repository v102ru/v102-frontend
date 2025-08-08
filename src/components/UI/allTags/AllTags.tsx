import { FC } from "react";
import "./AllTags.scss";
import Tag from "../tag";

const AllTags: FC = ({}) => {
  const defaultTags = [
    "Политика",
    "Расследования",
    "Происшествия",
    "Экономика",
    "Общество",
    "Спорт",
    "Телеком",
    "Борьба с коррупцией",
    "Экология",
    "Все рубрики",
  ];

  return (
    <section className={"allTags"}>
      {defaultTags.map((tag) => {
        return <Tag name={tag} />;
      })}
    </section>
  );
};

export default AllTags;
