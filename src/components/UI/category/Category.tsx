import { FC } from "react";
import "./Category.scss";
import CustomLink from "../customLink";

interface CategoryProps {
  title?: string;
  alias?: string;
}

const Category: FC<CategoryProps> = ({ title, alias }) => {
  return (
    <CustomLink to={alias ? `/section/${alias}` : "/"} className={"category"}>
      {title || "Неизвестное"}
    </CustomLink>
  );
};

export default Category;
