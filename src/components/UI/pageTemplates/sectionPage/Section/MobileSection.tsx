import { FC } from "react";
import Advertisement from "../../../advertisement";
import { TSplitSoloNewsBySections } from "../types";
import FeedCard from "../../../feedCard";

type TProps = TSplitSoloNewsBySections & { ads: any[] };

export const MobileSection: FC<TProps> = ({
  firstSectionItems,
  secondSectionItems,
  thirdSectionItems,
}) => (
  <>
    <section className={"sectionPage__mainContent mainContent"}>
      <section className={"mainContent__mainCards"}>
        {firstSectionItems.map((news, index) => (
          <>
            <FeedCard type={index === 0 ? "full" : "half"} {...news} />
            {index !== 0 && (index + 1) % 2 === 0 && <Advertisement />}
          </>
        ))}
      </section>
    </section>
    {secondSectionItems.length ? (
      <section className={"sectionPage__additionalContent additionalContent"}>
        {secondSectionItems.map((news, index) => (
          <>
            <FeedCard type={"half"} {...news} />
            {index !== 0 && (index + 1) % 2 === 0 && <Advertisement />}
          </>
        ))}
      </section>
    ) : null}
    {thirdSectionItems.length ? (
      <section className={"sectionPage__subContent subContent"}>
        {thirdSectionItems.map((news, index) => (
          <>
            <FeedCard type={"half"} {...news} />
            {index !== 0 && (index + 1) % 2 === 0 && <Advertisement />}
          </>
        ))}
      </section>
    ) : null}
  </>
);
