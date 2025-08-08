import React, { Dispatch } from "react";
import { TNewsCategories } from "../types/api";

export interface ILink {
  href: string;
  name: string;
}

export enum SocialLinks {
  TELEGRAM = "telegram",
  VK = "vk",
  FACEBOOK = "facebook",
  OK = "ok",
  TWITTER = "twitter",
  COPY_LINK = "copyLink",
  PRINT = "print",
}

export type TShareCard = {
  type: SocialLinks;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onPrint?: () => void;
};

export interface ISeparateComment {
  author: string;
  date: string;
  text: string;
  depthLevel: number;
}

export interface IComment {
  author: string;
  date: string;
  text: string;
  comments: IComment[];
}

export type TSideMenuContext = {
  isSideMenuPoped: boolean;
  isTopMenuPoped: boolean;
  setSideMenuPoped: () => void;
  setTopMenuPoped: (state: boolean) => void;
  topMenuContent: HTMLElement | null;
  setTopMenuContent: Dispatch<HTMLElement | null>;
};

export type TNewsCategoriesContext = TNewsCategories;
