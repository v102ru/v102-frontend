import { TFilteredNewsByAlias } from "../../../../types/api";
import { TSplitSoloNewsBySections } from "./types";

export const splitNewsBySections = (
  news: TFilteredNewsByAlias
): TSplitSoloNewsBySections => {
  const firstIndex = 0; // 0
  const secondIndex = firstIndex + 4; // 4
  const thirdIndex = secondIndex + 16; // 19
  const fourthIndex = thirdIndex + 17; // 37

  const firstSectionItems = news.slice(firstIndex, secondIndex);
  const secondSectionItems = news.slice(secondIndex + 1, thirdIndex);
  const thirdSectionItems = news.slice(thirdIndex + 1, fourthIndex);

  return { firstSectionItems, secondSectionItems, thirdSectionItems };
};

export const splitAdsBySections = (ads: any[]): TSplitSoloNewsBySections => {
  const firstIndex = 0; // 0
  const secondIndex = firstIndex + 3; // 3
  const thirdIndex = secondIndex + 7; // 7
  const fourthIndex = thirdIndex + 3; // 3

  const firstSectionItems = ads.slice(firstIndex, secondIndex);
  const secondSectionItems = ads.slice(secondIndex + 1, thirdIndex);
  const thirdSectionItems = ads.slice(thirdIndex + 1, fourthIndex);

  return { firstSectionItems, secondSectionItems, thirdSectionItems };
};
