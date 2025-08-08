import { FC } from "react";
import Advertisement from "../../../advertisement";
import FeedCard from "../../../feedCard";
import { TSplitSoloNewsBySections } from "../types";

type TProps = TSplitSoloNewsBySections & { ads: any[] };

export const DesktopSection: FC<TProps> = ({
  firstSectionItems,
  secondSectionItems,
  thirdSectionItems,
}) => (
  <>
    <section className={"sectionPage__mainContent mainContent"}>
      <section className={"mainContent__asideCardsList asideCardsList"}>
        {firstSectionItems.map((news, index) => (
          <FeedCard type={index === 0 ? "full" : "half"} {...news} />
        ))}
      </section>
      <aside className={"mainContent__asideAds"}>
        <Advertisement />
        <Advertisement />
        <Advertisement />
      </aside>
    </section>
    {secondSectionItems.length ? (
      <section className={"sectionPage__additionalContent additionalContent"}>
        <Advertisement />
        <Advertisement />
        <Advertisement />
        {secondSectionItems.length >= 8 && (
          <>
            <Advertisement />
            <Advertisement />
            <Advertisement />
          </>
        )}
        {secondSectionItems.length >= 15 && <Advertisement />}
        {secondSectionItems.map((news) => (
          <FeedCard type={"half"} {...news} />
        ))}
      </section>
    ) : null}
    {thirdSectionItems.length ? (
      <section className={"sectionPage__subContent subContent"}>
        {thirdSectionItems.map((news) => (
          <FeedCard type={"half"} {...news} />
        ))}
        <Advertisement />
        <Advertisement />
        <Advertisement />
      </section>
    ) : null}
  </>
);
