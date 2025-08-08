import { FC } from "react";
import "./SectionLink.scss";
import CustomLink from "../customLink";
import { LinkProps } from "react-router-dom";

interface SectionLinkProps extends LinkProps {
  name: string;
  to: string;
}

const SectionLink: FC<SectionLinkProps> = ({ name, to, ...props }) => {
  return (
    <div className={"sectionLink__wrapper"}>
      <CustomLink className={"sectionLink__name"} to={to}>
        {name}
      </CustomLink>
    </div>
  );
};

export default SectionLink;
