import {
  TFilteredNewsByAlias,
  TFilteredNewsById,
  TMainNewsArray,
  TNewsByAlias,
  TNewsById,
  TNewsLine,
} from "../types/api";

const MATCH_URL_IMAGE = /http:\/\/media\.v102\.ru\/pictures\/.*\.(png|jpg)/g;

export const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 150;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
};

export const parseSrcFromData = (data: string) => {
  const matches = data.match(MATCH_URL_IMAGE);
  return Array.isArray(matches) ? matches[0] : "";
};

export const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const padL = (nr: number, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

  return `${padL(newDate.getDate())}.${padL(
    newDate.getMonth() + 1
  )}.${newDate.getFullYear()} ${padL(newDate.getHours())}:${padL(
    newDate.getMinutes()
  )}`;
};

export const dateToWords = (date: string) => {
  const formattedDate = formatDate(date);
  const [day, month, yearWithTime] = formattedDate.split(".");
  const [year] = yearWithTime.split(" ");
  return `${day} ${months[Number(month) - 1]} ${year}`;
};

export const filterNewsLine = (newsLine: TNewsLine): TNewsLine =>
  newsLine.map((curr) => {
    curr.date_pub_ins = formatDate(curr.date_pub_ins);

    return curr;
  });

export const filterMainNews = (data: TMainNewsArray): any =>
  data.map((currentNews) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { title, count_view, ...cloneData } = currentNews;
    const imgSrc = parseSrcFromData(currentNews?.text);
    const readTime = calculateReadingTime(currentNews?.text);
    return {
      ...cloneData,
      imgSrc,
      readTime,
      heading: title,
      views: count_view,
    };
  });

export const filterNewsById = (data: TNewsById): TFilteredNewsById => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, count_view, ...cloneData } = data;
  const imgSrc = parseSrcFromData(data?.text);
  const readTime = calculateReadingTime(data?.text);
  const date = dateToWords(data?.date_pub_ins);
  return {
    ...cloneData,
    imgSrc,
    readTime,
    heading: title,
    views: count_view,
    date_pub_ins: date,
  };
};

export const filterNewsByAlias = (data: TNewsByAlias): TFilteredNewsByAlias =>
  data.map((news) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { title, count_view, thumbnail, ...cloneData } = news;
    const imgSrc = thumbnail
      ? `https://media.v102.ru/pictures/${thumbnail}`
      : undefined;
    return {
      ...cloneData,
      imgSrc,
      heading: title,
      views: count_view,
    };
  });

export const getNoun = (
  number: number,
  one: string,
  two: string,
  five: string
) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

export const getNounMinutes = (minutes: number) => {
  return `${minutes} ${getNoun(minutes, "минута", "минуты", "минут")}`;
};

export const extractContent = (plainHtml: string) => {
  return (
    new DOMParser().parseFromString(plainHtml, "text/html").documentElement
      .innerHTML || ""
  );
};

export const removeNbsp = (string: string) => string.replace(/\&nbsp;/g, " ");

export const removeAllExceptSomeTags = (string: string) =>
  removeNbsp(
    string.replace(
      /<(?!a)(?!b)(?!p)(?!br)(?!i)(?!ul)(?!ol)(?!li)(?!img)(?!iframe)(?!\/a)[^>]+>/g,
      ""
    )
  );

const IMG_REGEX = /<img .*>/;
const IFRAME_REGEX = /<iframe .*>/;
export enum HtmlToArrayTypes {
  TEXT,
  IMAGE,
  MULTIPLE_IMAGES,
  VIDEO,
  // eslint-disable-next-line @typescript-eslint/no-shadow
}
export type PlainHtmlToArrayContentSolo = {
  type: HtmlToArrayTypes;
  content?: string | string[];
};
export type PlainHtmlToArrayContent = PlainHtmlToArrayContentSolo[];
export const plainHtmlToArray = (plainHtml: string) => {
  const extractedContent = extractContent(plainHtml)
    .split(/\n/g)
    .reduce((acc: PlainHtmlToArrayContent, content) => {
      const filteredContent = removeAllExceptSomeTags(content).trim();
      const lastElement = acc[acc.length - 1];

      if (!filteredContent) {
        return acc;
      }

      if (IMG_REGEX.test(filteredContent)) {
        if (lastElement?.type === HtmlToArrayTypes.IMAGE) {
          lastElement.type = HtmlToArrayTypes.MULTIPLE_IMAGES;
          lastElement.content = [
            lastElement.content as string,
            filteredContent,
          ];
        } else if (lastElement?.type === HtmlToArrayTypes.MULTIPLE_IMAGES) {
          if (typeof lastElement.content !== "string") {
            lastElement.content!.push(filteredContent);
          }
        } else {
          acc.push({
            type: HtmlToArrayTypes.IMAGE,
            content: filteredContent,
          });
        }
      } else if (IFRAME_REGEX.test(filteredContent)) {
        acc.push({
          type: HtmlToArrayTypes.VIDEO,
          content: filteredContent,
        });
      } else {
        acc.push({
          type: HtmlToArrayTypes.TEXT,
          content: filteredContent,
        });
      }

      return acc;
    }, []);
  return extractedContent.slice(1);
};

export function splitArrayToChunks(arr: unknown[], chunkSize: number) {
  const R = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
  return R;
}
