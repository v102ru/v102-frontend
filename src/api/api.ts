import {
  TGetMainNews,
  TNewsByAlias,
  TNewsById,
  TNewsCategories,
  TNewsLine,
} from "../types/api";

const API_PATH = "https://apiv2.v102.ru";

export const getMainNews = async (): Promise<TGetMainNews | undefined> => {
  return fetch(`${API_PATH}/news/main`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};

export const getNewsById = async (
  id: number,
  options: {
    doesNeedActualId?: boolean;
  } = {}
): Promise<TNewsById | undefined> => {
  const { doesNeedActualId } = options;
  return fetch(
    `${API_PATH}/news?newsId=${id}${
      doesNeedActualId ? `&doesNeedActualId=${doesNeedActualId}` : ""
    }`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};

export const getNewsLine = async (
  type: "main" | "federal" | "new" = "main",
  ignoredId?: string
): Promise<TNewsLine | undefined> => {
  return fetch(
    `${API_PATH}/news/newsLine?type=${type}${
      ignoredId ? `&ignoredId=${ignoredId}` : ""
    }`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};

export const getNewsCategories = async (): Promise<
  TNewsCategories | undefined
> => {
  return fetch(`${API_PATH}/categories`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};

export const getNewsByAlias = async (
  id: number,
  skip?: number,
  take = 37,
  ignoredId?: string
): Promise<TNewsByAlias | undefined> =>
  fetch(
    `${API_PATH}/news?categoryId=${id}${skip ? `&skip=${skip}` : ""}${
      take ? `&take=${take}` : ""
    }${ignoredId ? `&ignoredId=${ignoredId}` : ""}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });

export const getEconomics = async (): Promise<TNewsByAlias | undefined> => {
  return fetch(`${API_PATH}/news?categoryId=195&take=5`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
};
