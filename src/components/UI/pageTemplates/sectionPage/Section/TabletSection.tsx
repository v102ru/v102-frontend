import { FC } from "react";
import { TSplitSoloNewsBySections } from "../types";
import FeedCard from "../../../feedCard";
import Advertisement from "../../../advertisement";

type TProps = TSplitSoloNewsBySections & { ads: any[] };

export const TabletSection: FC<TProps> = ({
  firstSectionItems,
  secondSectionItems,
  thirdSectionItems,
}) => (
  <>
    <section className={"sectionPage__mainContent mainContent"}>
      <section className={"mainContent__mainCards"}>
        <Advertisement />
        {firstSectionItems.map((news, index) => (
          <FeedCard type={index === 0 ? "full" : "half"} {...news} />
        ))}
      </section>
    </section>
    {secondSectionItems.length ? (
      <section className={"sectionPage__additionalContent additionalContent"}>
        <Advertisement />
        {secondSectionItems.length >= 4 && <Advertisement />}
        {secondSectionItems.length >= 8 && <Advertisement />}
        {secondSectionItems.length >= 12 && <Advertisement />}
        {secondSectionItems.length >= 16 && <Advertisement />}
        {secondSectionItems.length === 19 && <Advertisement />}
        {secondSectionItems.map((news) => (
          <FeedCard type={"half"} {...news} />
        ))}
      </section>
    ) : null}
    {thirdSectionItems.length ? (
      <section className={"sectionPage__subContent subContent"}>
        {thirdSectionItems.length >= 2 && (
          <>
            <Advertisement />
            <Advertisement />
          </>
        )}
        {thirdSectionItems.length >= 6 && <Advertisement />}
        {thirdSectionItems.map((news) => (
          <FeedCard type={"half"} {...news} />
        ))}
      </section>
    ) : null}
  </>
);
