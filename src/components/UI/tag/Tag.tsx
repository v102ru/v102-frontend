import { FC } from "react";
import "./Tag.scss";
import CustomLink from "../customLink";

interface TagProps {
  name: string;
  path?: string;
}

const Tag: FC<TagProps> = ({ name, path }) => {
  return (
    <CustomLink to={path || "/"} className={"tag"}>
      <span className={"tag__name"}>{name}</span>
    </CustomLink>
  );
};

export default Tag;
