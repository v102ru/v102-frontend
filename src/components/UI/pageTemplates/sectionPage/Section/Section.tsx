import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { MobileSection } from "./MobileSection";
import { TabletSection } from "./TabletSection";
import { DesktopSection } from "./DesktopSection";
import { TSplitSoloNewsBySections } from "../types";

type TProps = TSplitSoloNewsBySections & { ads: any[] };
const Section: FC<TProps> = (props) => {
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1439px" });

  if (isMobile) {
    return <MobileSection {...props} />;
  }

  if (isTablet) {
    return <TabletSection {...props} />;
  }

  return <DesktopSection {...props} />;
};

export default Section;
