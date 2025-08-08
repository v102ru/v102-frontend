// Minimal API type definitions inferred from current usage
// These are intentionally lightweight and include only the fields referenced in components/utils.

// Categories
export type TNewsCategory = {
  id: number;
  title: string;
};
export type TNewsCategories = TNewsCategory[];

// News line (used for side ticker / lists)
export type TNewsLineItem = {
  id: number | string;
  title: string;
  date_pub_ins: string; // formatted as string in UI
};
export type TNewsLine = TNewsLineItem[];

// Raw news item by ID (server response subset)
export type TNewsById = {
  id: number | string;
  id_menu?: string | number;
  title: string;
  text: string;
  count_view: number;
  date_pub_ins: string; // ISO string from API
  // ...other fields from API are not used in UI
};

// Raw list by alias/category (server response subset)
export type TNewsByAliasItem = {
  id: number | string;
  id_menu?: string | number;
  title: string;
  count_view: number;
  thumbnail?: string; // file name used to build full image URL
  // ...other fields are not used in UI
};
export type TNewsByAlias = TNewsByAliasItem[];

// Raw main news (server response subset)
export type TMainNews = {
  id: number | string;
  id_menu?: string | number;
  title: string;
  text: string;
  count_view: number;
  // ...other fields are not used in UI
};
export type TMainNewsArray = TMainNews[];
export type TGetMainNews = TMainNewsArray;

// Filtered/derived shapes used throughout the UI
export type TFilteredNewsBase = {
  id: number | string;
  id_menu?: string | number;
  heading: string;
  views: number;
  imgSrc?: string;
};

export type TFilteredNewsById = TFilteredNewsBase & {
  date_pub_ins: string; // pretty "DD.MM.YYYY HH:mm" or words
  readTime: number;
  text?: string;
};

export type TFilteredNewsByAlias = TFilteredNewsBase[];

export type TFilteredMainNews = TFilteredNewsBase & {
  readTime: number;
};
export type TFilteredMainNewsArray = TFilteredMainNews[];
